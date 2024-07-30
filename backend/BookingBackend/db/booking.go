package db

import "time"

type Booking struct {
	FirstName   string    `json:"firstName" bson:"firstName"`
	LastName    string    `json:"lastName" bson:"lastName"`
	Email       string    `json:"email" bson:"email"`
	TrainNumber string    `json:"trainnumber" bson:"trainnumber"`
	Arrival     string    `json:"arrival" bson:"arrival"`
	Departure   string    `json:"departure" bson:"departure"`
	CreatedOn   time.Time `json:"createdOn" bson:"createdon"`
}
