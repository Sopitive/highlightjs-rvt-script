/*
Language: RVT Script
Author: sopitive
Contributors: Sopitive
Description: Reach Variant Tool Scripting Language
*/
 module.exports = function (hljs)
 {
   return {
     case_insensitive: true,
     keywords:
       {
         keyword: 'for alt altif enum declare each do on function end alias then if local high',
         literal: 'true false none'
       },
     contains:
       [
         hljs.QUOTE_STRING_MODE,
         hljs.APOS_STRING_MODE,
         hljs.C_NUMBER_MODE,
         {
           className: 'string',
           begin: '"',
           end: '"',
           illegal: '\\n',
           contains: [hljs.BACKSLASH_ESCAPE]
         },
         {
           className: 'type',
           begin: /((-|>)?\s?\(|-\[)\w*:/,
           excludeBegin: true,
           end: '\\W',
           excludeEnd: true,
         },
         {
           className: 'functionCall',
           begin: /(\s+|)\w+\(/,
           end: /\)/,
           keywords: {
             built_in: 'place_at_me set_scale face_toward copy_rotation_from try_get_killer try_get_weapon try_get_vehicle set_text delete is_of_type has_forge_label is_in_use is_out_of_bounds shape_contains add_weapon animate_device_position apply_shape_color_from_player_member attach_to detach enable_spawn_zone get_device_position get_device_power get_distane_to get_orientation get_speed kill place_between_me_and push_upward apply_upward_impulse remove_weapon set_device_actual_position set_device_power set_garbage_collection_disabled set_invincibility set_pickup_permissions set_progress_bar set_scale set_shape set_shape_visibility set_spawn_location_fireteams set_spawn_location_permissions set_waypoint_icon set_waypoint_priority set_waypoint_range set_waypoint_text set_waypoint_timer set_waypoint_visibility set_weapon_pickup_priority try_get_carrier get_carrier assisted_kill_of is_elite is_fireteam_leader is_monitor is_not_respawning is_spartan killer_type_is add_weapon apply_traits force_into_vehicle get_crosshair_target get_fireteam get_scoreboard_pos get_spree_count increment_req_money_by record_griefer_penalty set_biped set_co_op_spawning set_fireteam set_loadout_palette set_primary_respawn_object set_req_purchase_modes set_requisition_palette set_round_card_icon set_round_card_text set_round_card_title try_get_armor_ability get_armor_ability try_get_death_damage_mod get_death_damage_mod try_get_death_damage_type get_death_damage_type try_get_killer get_killer try_get_vehicle get_vehicle try_get_weapon get_weapon has_alliance_status has_any_players get_scoreboard_pos set_co_op_spawning set_primary_respawn_object'
           }
         },
         hljs.C_BLOCK_COMMENT_MODE,
         hljs.C_LINE_COMMENT_MODE,
         {
           begin: '--',
           ends: '--',
         }
       ]
   }
 }
 