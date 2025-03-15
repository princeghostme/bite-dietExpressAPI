import { NextFunction, Request, Response } from "express";
import usersMongo from "../Repository/usersMongo";
import { AppResponse, appRes } from "../Utility/appResponse";
import { Error } from "mongoose";
import ErrorMangement from "../Utility/ErrorManagement";
import { user } from "../Model/User";
import { sendemail } from "../Utility/mailer";

export const users = async (req: Request, res: Response, next: NextFunction) => {
    try {
        var requestData: user = req.body;
        var data = await usersMongo.findOneAndUpdate(
            { email: requestData.email },
            requestData,
            { new: true, upsert: true }
        );
        await data.save();
        await sendemail({
            to: [data.email],
            subject: "Passowrd temp passowrd",
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>OTP Verification</title>
                <style>
                    /* General Styles */
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f7f8fc;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .header h2 {
                        color: #333;
                        font-size: 24px;
                        font-weight: bold;
                        margin: 0;
                    }
                    .otp-code {
                        font-size: 32px;
                        font-weight: bold;
                        color: #4CAF50;
                        margin: 20px 0;
                        text-align: center;
                    }
                    .message {
                        font-size: 16px;
                        color: #666;
                        margin-bottom: 20px;
                        text-align: center;
                    }
                    .footer {
                        text-align: center;
                        font-size: 14px;
                        color: #999;
                    }
                    .footer a {
                        color: #4CAF50;
                        text-decoration: none;
                    }
                    .button {
                        display: inline-block;
                        background-color: #4CAF50;
                        color: white;
                        padding: 10px 20px;
                        text-align: center;
                        border-radius: 5px;
                        font-size: 16px;
                        font-weight: bold;
                        text-decoration: none;
                        margin: 20px auto;
                        display: block;
                    }
                    .button:hover {
                        background-color: #45a049;
                    }
                </style>
            </head>
            <body>

                <div class="container">
                    <!-- Header Section -->
                    <div class="header">
                        <h2>New Password</h2>
                    </div>

                    <!-- OTP Content Section -->
                    <div class="message">
                        <p>Hello,</p>
                        <p>Thank you forlogin the new password is there you can sigin using ${data.email}</p>
                    </div>

                    <!-- OTP Code -->
                    <div class="otp-code">
                        ${data.password}
                    </div>


                    <!-- Footer Section -->
                    <div class="footer">
                        <p>Need help? <a href="mailto:support@yourdomain.com">Contact support</a></p>
                    </div>
                </div>

            </body>
            </html>
            `
        })
        await appRes({
            res: res,
            data: new AppResponse().AppResponse(data)
        });
    }
    catch (err) {
        next(err);
    }
}

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("getting all users");
        const data = await usersMongo.find().populate({
            path: "manangerId"
        });
        console.log(data);
        await appRes({
            res: res,
            data: new AppResponse().AppResponse(data)
        });
    }
    catch (err) {
        next(err);

    }
}