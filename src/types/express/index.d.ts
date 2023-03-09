import express from "express";

declare global {
    namespace Express {
        interface Request {
            user?: Record<string, any>,
            session?: Record<string, any>
            logout?: (cb: (err: Error) => void) => void
        }
    }
}