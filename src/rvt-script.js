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
         keyword: 'for each do on function end alias then if local high',
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
             built_in: 'place_at_me set_scale face_toward copy_rotation_from try_get_killer try_get_weapon try_get_vehicle set_text'
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
 