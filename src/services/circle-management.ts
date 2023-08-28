import { UserInfo } from 'firebase-admin/lib/auth/user-record'
import { Circle, ICircleRepo } from '../data/circleRepo'
import { Database } from 'firebase-admin/lib/database/database'

export type ICircleManagementService = ReturnType<typeof CircleManagementService>

export const CircleManagementService = (firestore: Database, circleRepo: ICircleRepo) => {
    //Functions to be called by User
    const logon = (user: UserInfo, circleId: string) => {
        // Check if user is in a circle
        // If in a circle, carry on
        // If not in a circle, join random existing circle waiting for users,
        // If no waiting circles exist, create a circle and join it
    }

    const join = (user: UserInfo, circleId: string) => {
        //Firstly changes MongoDb to reflect user joining a circle
        //Checks if Circle needs status change
        //Firestore syncs to MongoDb
    }

    const leave = (user: UserInfo, circleId: string) => {
        //Firstly changes MongoDb to reflect user leaving a circle
        //Checks if Circle needs status change
        //Firestore syncs to MongoDb
    }

    const writeWord = (circleId: string, word: string) => {
        // Firstly changes Mongodb to reflect addition of work to circle, and switch index
        // Checks if Circle needs status change
        //Firestore syncs to MongoDb
    }

    const skipTurn = (circleId: string) => {
        // Change Mongodb to reflect a skipped turn, so switching Index
        // Firestore syncs to MongoDb
    }

    const checkCircle = (circleId: string) => {
        // check if Circle needs skipping
        // If yes
        // Check with firestore if checkCircle is already running for this Circle
        // If no
        // Update firestore to notify it
        // run skipping here
    }

    const createCircle = (user: UserInfo, circle: Partial<Circle>) => {
        // Creates a circle in MongoDb
        // Firestore syncs to MongoDb
    }

    const getCircles = (page: number, pageSize: number) => {
        // Load circles from backend, sorted Latest first, with the correct page and Page Size
    }

    return {}
}
