import { connectMongo } from "../../utils/server";
import Appointment from "../../models/Appointment";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    console.log("Connection to Mongo");
    await connectMongo();
    console.log("Connected to Mongo");


    if (req.method === "POST") {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).end();
    } else if (req.method === "GET") {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } else if (req.method === "PUT") { // or "PATCH"
        // Extract the appointment ID and the new status from the request
        const { appointmentId, status } = req.body;

        try {
            const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, { status }, { new: true });
            if (!updatedAppointment) {
                return res.status(404).send('Appointment not found');
            }
            res.status(200).json(updatedAppointment);
        }  catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    } else {
        res.status(405).end(); // Method Not Allowed for other HTTP methods
    }
}
