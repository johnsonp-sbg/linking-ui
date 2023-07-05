import { type Area } from './area';
import { type Supplier } from './supplier';
import { type CanonicalTeam as Team } from './team';

export interface CanonicalPlayer {
  playerId: string // A canonical player id. eg. "00000a84-aaaf-4d00-b8f3-a60be98f6c48"
  firstName?: string // A first name. eg. "Cristiano"
  surname: string // A surname. eg. "Ronaldo"
  customFullName?: string // A custom full name. eg. "C.Ronaldo"
  matchName: string // A match name. eg. "Ronaldo"
  isActive: boolean // Whether or not this player is still actively playing football (that is, they are not retired or deceased) eg. true
  nationality: Area
  birthday?: string // A players' birthday. eg. "18/04/1977"
  teams?: Team[] // A list of teams the player has played for.
}

export interface SupplierPlayer {
  supplier: Supplier
  supplierPlayerId: string // The ID of the player, as defined by the supplier. eg. "ISD-123"
  supplierFirstName?: string // The first name of the player, as defined by the supplier. eg. "Sam"
  supplierSurname: string // The surname of the player, as defined by the supplier. eg. "Allardyce"
  supplierBirthday?: string // The birthday of the player, as defined by the supplier. eg. "18/04/1977"
  canonicalPlayerId: string // The ID of the canonical player linked to this supplier player. eg. "00000a84-aaaf-4d00-b8f3-a60be98f6c48"
  canonicalPlayerFirstName?: string // The first name of the canonical player linked to this supplier player. eg. "Samuel"
  canonicalPlayerSurname: string // The surname of the canonical player linked to this supplier player. eg. "Allardyce"
  isConfirmed: boolean // Whether or not this supplier <-> canonical player link has been verified. eg. true
}

// Not in the API spec but in notes
// export interface UnrelatedPlayer {
//     supplier: Supplier
//     supplierTeamId: string
//     supplierFirstName: string
//     supplierSurname: string
//     supplierShirtNumber: string
//     optaId: string
//     area: Area
//     relinkingRetries?: number
// }
