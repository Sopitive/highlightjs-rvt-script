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
           className: 'property',
           begin: /\./,
           end: /\w+\s/,
           keywords: {
             built_in: 'spawn_sequence team health max_health max_shields shields biped rating score team unknown_09 frag_grenades plasma_grenades current_object current_player current_team death_event_damage_type hud_player hud_player_team hud_target_object hud_target_object_team hud_target_player hud_target_player_team killed_object killer_object killer_player neutral_team no_object no_player no_team no_widget betrayal_booting betrayal_penalty current_round dead_players_can_talk dont_team_restrict_chat fireteams_enabled friendly_fire grace_period_time grace_period_timer grenades_enabled indestructible_vehicles lives_per_round loadout_cam_time perfection_enabled powerup_duration_blue powerup_duration_red powerup_duration_yellow proximity_voice respawn_growth respawn_time respawn_traits_time round_limit round_time_limit round_timer rounds_to_win score_to_win sudden_death_time sudden_death_timer suicide_penalty symmetry symmetry_get team_lives_per_round teams_enabled'
           },
         },
          {
           className: 'variable',
           begin: /alias /,
           end: /\w+\s/,
         },
         {
           className: 'functionCall',
           begin: /(\s+|)\w+\(/,
           end: /\)/,
           keywords: {
             built_in: 'place_at_me face_toward copy_rotation_from try_get_killer try_get_weapon try_get_vehicle is_zero reset set_rate set_text delete is_of_type has_forge_label is_in_use is_out_of_bounds shape_contains add_weapon animate_device_position apply_shape_color_from_player_member attach_to detach enable_spawn_zone get_device_position get_device_power get_distane_to get_orientation get_speed kill place_between_me_and push_upward apply_upward_impulse remove_weapon set_device_actual_position set_device_power set_garbage_collection_disabled set_invincibility set_pickup_permissions set_progress_bar set_scale set_shape set_shape_visibility set_spawn_location_fireteams set_spawn_location_permissions set_waypoint_icon set_waypoint_priority set_waypoint_range set_waypoint_text set_waypoint_timer set_waypoint_visibility set_weapon_pickup_priority try_get_carrier get_carrier assisted_kill_of is_elite is_fireteam_leader is_monitor is_not_respawning end_round play_sound_for show_message_to is_spartan killer_type_is add_weapon apply_traits force_into_vehicle get_crosshair_target get_fireteam get_scoreboard_pos get_spree_count increment_req_money_by record_griefer_penalty set_biped set_co_op_spawning set_fireteam set_loadout_palette set_primary_respawn_object set_req_purchase_modes set_requisition_palette set_round_card_icon set_round_card_text set_round_card_title try_get_armor_ability get_armor_ability try_get_death_damage_mod get_death_damage_mod try_get_death_damage_type get_death_damage_type try_get_killer get_killer try_get_vehicle get_vehicle try_get_weapon get_weapon has_alliance_status has_any_players get_scoreboard_pos set_co_op_spawning set_primary_respawn_object set_visibility set_icon set_meter_params set_value_text rand send_incident set_scenario_interpolator_state insert_theater_film_marker get_random_object debug_print debug_set_tracing_enabled debug_force_player_view_count debug_break'
           }
         },
       ]
   }
 }
 