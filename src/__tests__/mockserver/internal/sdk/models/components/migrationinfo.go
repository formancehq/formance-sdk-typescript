// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"encoding/json"
	"fmt"
	"mockserver/internal/sdk/utils"
	"time"
)

type State string

const (
	StateToDo State = "TO DO"
	StateDone State = "DONE"
)

func (e State) ToPointer() *State {
	return &e
}
func (e *State) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "TO DO":
		fallthrough
	case "DONE":
		*e = State(v)
		return nil
	default:
		return fmt.Errorf("invalid value for State: %v", v)
	}
}

type MigrationInfo struct {
	Date    *time.Time `json:"date,omitempty"`
	Name    *string    `json:"name,omitempty"`
	State   *State     `json:"state,omitempty"`
	Version *string    `json:"version,omitempty"`
}

func (m MigrationInfo) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(m, "", false)
}

func (m *MigrationInfo) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &m, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *MigrationInfo) GetDate() *time.Time {
	if o == nil {
		return nil
	}
	return o.Date
}

func (o *MigrationInfo) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *MigrationInfo) GetState() *State {
	if o == nil {
		return nil
	}
	return o.State
}

func (o *MigrationInfo) GetVersion() *string {
	if o == nil {
		return nil
	}
	return o.Version
}
