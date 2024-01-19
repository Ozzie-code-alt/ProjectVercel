// pages/api/apointments/[appointmentId].js
import Appointment from "../../models/Appointment";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { appointmentId } = req.query; // Get the appointmentId from the query parameters

    if (req.method === 'DELETE') {
        // Handle DELETE request
        try {
            const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);
            console.log(deletedAppointment)
            if (!deletedAppointment) {
                return res.status(404).send('Appointment not found');
            }
            res.status(200).json({ message: 'Appointment successfully deleted' });
        }  catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred.' });
            }
        }
    } else {
        // If not a DELETE request, send a 405 Method Not Allowed response
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
