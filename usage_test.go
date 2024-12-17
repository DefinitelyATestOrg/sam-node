// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package sam_test

import (
	"context"
	"os"
	"testing"

	"github.com/DefinitelyATestOrg/sam-node/v2"
	"github.com/DefinitelyATestOrg/sam-node/v2/internal/testutil"
	"github.com/DefinitelyATestOrg/sam-node/v2/option"
)

func TestUsage(t *testing.T) {
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := sam.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	user, err := client.Users.New(context.TODO(), sam.UserNewParams{
		User: sam.UserParam{},
	})
	if err != nil {
		t.Error(err)
	}
	t.Logf("%+v\n", user.ID)
}
