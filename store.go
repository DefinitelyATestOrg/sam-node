// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package sam

import (
	"github.com/stainless-sdks/sam-go/v2/option"
)

// StoreService contains methods and other services that help with interacting with
// the sam API.
//
// Note, unlike clients, this service does not read variables from the environment
// automatically. You should not instantiate this service directly, and instead use
// the [NewStoreService] method instead.
type StoreService struct {
	Options []option.RequestOption
	Orders  *StoreOrderService
}

// NewStoreService generates a new service that applies the given options to each
// request. These options are applied after the parent client's options (if there
// is one), and before any request-specific options.
func NewStoreService(opts ...option.RequestOption) (r *StoreService) {
	r = &StoreService{}
	r.Options = opts
	r.Orders = NewStoreOrderService(opts...)
	return
}
