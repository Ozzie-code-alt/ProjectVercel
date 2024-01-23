import { Schema, model, models } from "mongoose";


const AppointmentSchema = new Schema({
    dob: Date,
    appointmentTime: String,
    name:String,
    contactInfo:String,
    email:String,
    status:String,
    source:String,
    packageList: String
})

const Appointment = models.Appointment || model("Appointment", AppointmentSchema)


export default Appointment