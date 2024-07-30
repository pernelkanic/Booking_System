package main

import (
	"net/http"

	contact "contact.com"
	"github.com/go-chi/chi"
)

var mh *contact.MongoHandler

func registerRoutes() http.Handler {
	r := chi.NewRouter()
	r.Route("/contacts", func(r chi.Router) {
		r.Get("/", getAllbooking)             //GET /contacts
		r.Get("/{bookingId}", getBookingbyId) //GET /contacts/0147344454
		r.Post("/", postBooking)              //POST /contacts

	})
	return r
}
