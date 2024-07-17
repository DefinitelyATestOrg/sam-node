// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package samgo

import (
	"context"
	"errors"
	"fmt"
	"net/http"

	"github.com/DefinitelyATestOrg/sam-go/v2/internal/apijson"
	"github.com/DefinitelyATestOrg/sam-go/v2/internal/param"
	"github.com/DefinitelyATestOrg/sam-go/v2/internal/requestconfig"
	"github.com/DefinitelyATestOrg/sam-go/v2/option"
)

// SimulationCardDisputeService contains methods and other services that help with
// interacting with the increase API.
//
// Note, unlike clients, this service does not read variables from the environment
// automatically. You should not instantiate this service directly, and instead use
// the [NewSimulationCardDisputeService] method instead.
type SimulationCardDisputeService struct {
	Options []option.RequestOption
}

// NewSimulationCardDisputeService generates a new service that applies the given
// options to each request. These options are applied after the parent client's
// options (if there is one), and before any request-specific options.
func NewSimulationCardDisputeService(opts ...option.RequestOption) (r *SimulationCardDisputeService) {
	r = &SimulationCardDisputeService{}
	r.Options = opts
	return
}

// After a [Card Dispute](#card-disputes) is created in production, the dispute
// will be reviewed. Since no review happens in sandbox, this endpoint simulates
// moving a Card Dispute into a rejected or accepted state. A Card Dispute can only
// be actioned one time and must have a status of `pending_reviewing`.
func (r *SimulationCardDisputeService) Action(ctx context.Context, cardDisputeID string, body SimulationCardDisputeActionParams, opts ...option.RequestOption) (res *CardDispute, err error) {
	opts = append(r.Options[:], opts...)
	if cardDisputeID == "" {
		err = errors.New("missing required card_dispute_id parameter")
		return
	}
	path := fmt.Sprintf("simulations/card_disputes/%s/action", cardDisputeID)
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPost, path, body, &res, opts...)
	return
}

type SimulationCardDisputeActionParams struct {
	// The status to move the dispute to.
	Status param.Field[SimulationCardDisputeActionParamsStatus] `json:"status,required"`
	// Why the dispute was rejected. Not required for accepting disputes.
	Explanation param.Field[string] `json:"explanation"`
}

func (r SimulationCardDisputeActionParams) MarshalJSON() (data []byte, err error) {
	return apijson.MarshalRoot(r)
}

// The status to move the dispute to.
type SimulationCardDisputeActionParamsStatus string

const (
	// The Card Dispute has been accepted and your funds have been returned. The card
	// dispute will eventually transition into `won` or `lost` depending on the
	// outcome.
	SimulationCardDisputeActionParamsStatusAccepted SimulationCardDisputeActionParamsStatus = "accepted"
	// The Card Dispute has been rejected.
	SimulationCardDisputeActionParamsStatusRejected SimulationCardDisputeActionParamsStatus = "rejected"
	// The Card Dispute has been lost and funds previously credited from the acceptance
	// have been debited.
	SimulationCardDisputeActionParamsStatusLost SimulationCardDisputeActionParamsStatus = "lost"
	// The Card Dispute has been won and no further action can be taken.
	SimulationCardDisputeActionParamsStatusWon SimulationCardDisputeActionParamsStatus = "won"
)

func (r SimulationCardDisputeActionParamsStatus) IsKnown() bool {
	switch r {
	case SimulationCardDisputeActionParamsStatusAccepted, SimulationCardDisputeActionParamsStatusRejected, SimulationCardDisputeActionParamsStatusLost, SimulationCardDisputeActionParamsStatusWon:
		return true
	}
	return false
}
