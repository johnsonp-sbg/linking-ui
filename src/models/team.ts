import { type Area } from './area';
import { type CanonicalPlayer as Player } from './player';

// export interface Team {
//     id: string
//     name: string
//     code: string
//     area: Area
//     isNational: boolean
//     type: string
//     homeVenue: string
//     customName: string
//     players: Player[]
// }

export interface CanonicalTeam {
  teamId: string // A canonical team id. eg. "00000a84-aaaf-4d00-b8f3-a60be98f6c48"
  name: string // A name. eg. "Leeds"
  code?: string // A short code for the team. eg. "LEE"
  area: Area
  isNational: boolean // Is it a national team. eg. true
  teamType: string // The type of the team. One of default, youth, men, women eg. "men"
  homeVenue?: string // A home venue. eg. "Elland road"
  players?: Player[]
}
