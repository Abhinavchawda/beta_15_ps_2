import asyncWrapper from "../utils/asyncWrapper.js"
import ApiError from "../utils/ApiError.js"
import User from "../models/user.model.js"
import ApiResponse from "../utils/ApiResponse.js"
import { COOKIE_OPTIONS } from "../constants.js"

export const register = asyncWrapper(async (req, res) => {
    // Extract data from request body
    const { fullName, username, email, password } = req.body

    // Checking whether all the required fields were sent ot not
    if (
        [fullName, username, email, password].some(
            (field) => field?.trim() == ""
        )
    ) {
        throw new ApiError({
            message: "All fields are compulsory",
            statusCode: 400
        })
    }

    // Checking whether a user with sent username or email already exists
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existingUser) {
        throw new ApiError({
            message: "User already exist",
            statusCode: 409
        })
    }

    // Make entry into DB
    const user = await User.create({
        fullName,
        email,
        username,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError({
            message: "Couldn't register user",
            statusCode: 500
        })
    }

    return res.status(200).json(
        new ApiResponse({
            statusCode: 200,
            message: "User registered successfully",
            data: createdUser
        })
    )
})

export const login = asyncWrapper(async (req, res) => {
    // Extract data (username & password) from request body
    const { username, password } = req.body
    // Throw error if required data not provided
    if (!username || !password) {
        throw new ApiError({
            message: "Username & Password are both required",
            statusCode: 400
        })
    }
    // Check whether the user already have an account or not
    let user = await User.findOne({ username })
    if (!user) {
        throw new ApiError({
            message: "User not registered",
            statusCode: 400
        })
    }
    // Check password
    const isPasswordCorrect = await user.isPasswordCorrect(password)
    if (!isPasswordCorrect) {
        throw new ApiError({
            message: "Invalid credentials",
            statusCode: 400
        })
    }
    user = user.select("-password")

    const accessToken = user.generateAccessToken()

    return res
        .status(200)
        .cookie("accessToken", accessToken, COOKIE_OPTIONS) // send cookies
        .json(
            new ApiResponse({
                statusCode: 200,
                message: "User logged in successfully",
                data: {
                    ...user,
                    accessToken
                }
            })
        )
})

export const logout = asyncWrapper(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: { refreshToken: 1 }
        },
        { new: true }
    )

    return res
        .status(200)
        .clearCookie("accessToken", COOKIE_OPTIONS)
        .clearCookie("refreshToken", COOKIE_OPTIONS)
        .json(
            new ApiResponse({
                message: "User logged out succesfully",
                statusCode: 200
            })
        )
})

export const updatePassword = asyncWrapper(async (req, res) => {
    const { oldPassword, newPassword } = req.body
    const user = await User.findById(req.user?._id)
    if (!user) {
        throw new ApiError({
            message: "Unauthorized request",
            statusCode: 401
        })
    }
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
    if (!isPasswordCorrect) {
        throw new ApiError({
            message: "Invalid old password",
            statusCode: 400
        })
    }

    user.password = newPassword
    await user.save({ ValidateBeforeSave: false })

    return res.status(200).json(
        new ApiResponse({
            statusCode: 200,
            message: "Password changed successfully"
        })
    )
})

export const getCurrentUser = asyncWrapper(async (req, res) => {
    return res.status(200).json(
        new ApiResponse({
            message: "OK",
            statusCode: 200,
            data: req.user
        })
    )
})

export const updateAccountDetails = asyncWrapper(async (req, res) => {
    const { username, fullName, email } = req.body
    if (!username && !fullName && !email) {
        throw new ApiError({
            message: "At least 1 field is required",
            statusCode: 401
        })
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        { $set: { username, fullName, email } },
        { new: true }
    ).select("-password -refreshToken")

    return res.status(200).json(
        new ApiResponse({
            statusCode: 200,
            message: "Account details updated successfully",
            data: user
        })
    )
})


export const getTopScore = asyncWrapper(async (req,res)=>{
    const response = await User.find({}).sort('-score').limit(10);
    console.log(data);
    if(!response){
        throw new ApiError({
            statusCode: 400,
            message: data.message ,
        })
    }
    else{
        return res.status(200).json(
            new ApiResponse({
                statusCode: 200,
                message: "Account details updated successfully",
                data: data
            })
        )
    }
})

const getTopStreak = asyncWrapper(async(req,res)=> {
    const result = await User.find({}).sort('-streak_count').limit(10);
    console.log(data);
    if(!result){
        throw new ApiError({
            statusCode : 400,
            message:"Wrong in getTopStreak",
        })
    }
    return res.status(200).json(
        new ApiResponse({
            statusCode:200,
            message:"The top 10 streak holders has been sent to the frontend",
            data:data
        })
    )
})