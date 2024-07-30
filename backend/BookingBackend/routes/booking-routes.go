package main

import (
	"booking-service/db"
	"net/http"

	"github.com/go-chi/chi"
)

var mh *db.Booking.MongoHandler

func registerRoutes() http.Handler {
	r := chi.NewRouter()
	r.Route("/apo", func(r chi.Router) {
		r.Get("/", getAllbooking)             //GET /contacts
		r.Get("/{bookingId}", getBookingbyId) //GET /contacts/0147344454
		r.Post("/", postooking)              //POST /contacts

	})
	return r
}
