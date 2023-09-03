import { DateTime } from 'luxon'
import { Schema, Model, Connection } from 'mongoose'

export type CircleStatus = 'Active' | 'Waiting' | 'Done'
export const CircleStatuses = ['Active', 'Waiting', 'Done']

export interface Circle {
    code: string
    members: string[]
    story: string
    settings: {
        maxMembers: number
        minMembers: number
        numberOfWords: number
        delay: number
    }
    current: {
        status: CircleStatus
        lastModification: DateTime
        index: number
    }
}

export type ICircleRepo = Model<Circle>

const CircleSchema = new Schema<Circle>(
    {
        code: { type: Schema.Types.String, required: true },
        members: { type: [Schema.Types.String], required: true },
        story: { type: Schema.Types.String, required: true },
        current: {
            status: { type: Schema.Types.String, enum: CircleStatuses, required: true },
            index: { type: Schema.Types.Number, required: true },
            lastModification: { type: Schema.Types.Date, required: true }
        },
        settings: {
            maxMembers: { type: Schema.Types.Number, required: true },
            minMembers: { type: Schema.Types.Number, required: true },
            numberOfWords: { type: Schema.Types.Number, required: true },
            delay: { type: Schema.Types.Number, required: true }
        }
    },
    {
        timestamps: true
    }
)

export const CircleRepo = async (connection: Connection): Promise<ICircleRepo> => {
    const circleRepo = connection.model<Circle>('circle', CircleSchema)
    await circleRepo.syncIndexes()
    return circleRepo
}
