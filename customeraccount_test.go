// File generated from our OpenAPI spec by Stainless.

package samgo_test

import (
	"context"
	"errors"
	"os"
	"testing"

	"github.com/DefinitelyATestOrg/sam-go"
	"github.com/DefinitelyATestOrg/sam-go/internal/testutil"
	"github.com/DefinitelyATestOrg/sam-go/option"
)

func TestCustomerAccountGet(t *testing.T) {
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := samgo.NewClient(
		option.WithBaseURL(baseURL),
	)
	_, err := client.Customers.Accounts.Get(
		context.TODO(),
		"6878951b-256b-4baa-9e81-ad4c577adc4e",
		"3dc3d5b3-7023-4848-9853-f5400a64e80f",
		samgo.CustomerAccountGetParams{
			UserID: samgo.F("36a22460-ebc8-4ffe-a213-1683c5a420c5"),
		},
	)
	if err != nil {
		var apierr *samgo.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestCustomerAccountListWithOptionalParams(t *testing.T) {
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := samgo.NewClient(
		option.WithBaseURL(baseURL),
	)
	_, err := client.Customers.Accounts.List(
		context.TODO(),
		"6878951b-256b-4baa-9e81-ad4c577adc4e",
		samgo.CustomerAccountListParams{
			UserID:          samgo.F("36a22460-ebc8-4ffe-a213-1683c5a420c5"),
			CashAccountType: samgo.F([]samgo.CustomerAccountListParamsCashAccountType{samgo.CustomerAccountListParamsCashAccountTypeCacc, samgo.CustomerAccountListParamsCashAccountTypeCard, samgo.CustomerAccountListParamsCashAccountTypeCash}),
			Status:          samgo.F([]samgo.CustomerAccountListParamsStatus{samgo.CustomerAccountListParamsStatusEnabled, samgo.CustomerAccountListParamsStatusDeleted, samgo.CustomerAccountListParamsStatusBlocked}),
		},
	)
	if err != nil {
		var apierr *samgo.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestCustomerAccountCloseWithOptionalParams(t *testing.T) {
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := samgo.NewClient(
		option.WithBaseURL(baseURL),
	)
	err := client.Customers.Accounts.Close(
		context.TODO(),
		"6878951b-256b-4baa-9e81-ad4c577adc4e",
		"3dc3d5b3-7023-4848-9853-f5400a64e80f",
		samgo.CustomerAccountCloseParams{
			IdempotencyKey: samgo.F("2318951c-356e-3bcd-9e94-ad4c593adc4f"),
		},
	)
	if err != nil {
		var apierr *samgo.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}
