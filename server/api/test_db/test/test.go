package test

import (
	"skaffolder/test/config"
	"skaffolder/test/security"

	"github.com/go-chi/chi"
)

type Config struct {
	*config.Config
}

func New(configuration *config.Config) *Config {
	return &Config{configuration}
}

// Routes
func (config *Config) Routes() *chi.Mux {
	router := chi.NewRouter()

	// start routing

	// end routing

	// Write here your custom APIs
	// EXAMPLE :

	/**
	router.Group(func(router chi.Router) {
		router.Get("/", config.listCustom) // Create the listCustom method in this file
	})
	*/

	return router
}
