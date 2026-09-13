import type { JsonValue } from './index'

export const defaultSettings: Record<string, JsonValue> = {
  // KiCad's NET_SETTINGS reader replaces an explicitly saved Default netclass
  // without initializing missing fields. In particular, absent schematic
  // widths become -1 IU and break Eeschema's junction/segment hit testing.
  // Native defaults from KiCad 10 common/netclass.cpp; widths below are mils.
  "net_settings": {
    "classes": [{
      "name": "Default",
      "wire_width": 6,
      "bus_width": 12,
      "line_style": 0,
      "clearance": 0.2,
      "track_width": 0.2,
      "via_diameter": 0.6,
      "via_drill": 0.3,
      "microvia_diameter": 0.3,
      "microvia_drill": 0.1,
      "diff_pair_width": 0.2,
      "diff_pair_gap": 0.25,
      "diff_pair_via_gap": 0.25
    }]
  },
  "erc": {
    "erc_exclusions": [],
    "meta": {
      "version": 0
    }
  }
}
