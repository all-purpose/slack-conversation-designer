<template>
  <div class="light_theme">
    <div id="msg_0_000000" data-ts="0.000000" data-model-ob-id="" data-member-id="" data-qa="message_container" class="ts-message message bot_message feature_fix_files standalone first" data-selectable="false">
      <span class="is_pinned_holder"></span>
      <div class="message_gutter">
        <div class="message_icon">
          <a class="app_preview_link"><img src="https://a.slack-edge.com/66f9/img/avatars/ava_0002-48.png" class="member_image bot_icon_default thumb_36"></a>
        </div>
        <a href="/archives/undefined/p0000000" target="new_1537217409560" class="timestamp ts_tip ts_tip_top ts_tip_float ts_tip_hidden ts_tip_multiline ts_tip_delay_300">
          <i class="copy_only">[</i>4:00 PM
          <i class="copy_only">]</i>
          <span class="ts_tip_tip">
            <span class="ts_tip_multiline_inner">Dec&nbsp;31st,&nbsp;1969&nbsp;at&nbsp;4:00:00&nbsp;PM</span>
          </span>
        </a>
      </div>
      <div class="message_content">
        <div class="message_content_header">
          <div class="message_content_header_left">
            <span class="message_sender color_bot_Your_App">
              <a class="app_preview_link">Your App</a>
              <span class="c-app_label">APP</span>
            </span>
            <span class="time_star_and_extra_metadata">
              <a href="/archives/undefined/p0000000" target="new_1537217409560" class="timestamp ts_tip ts_tip_top ts_tip_float ts_tip_hidden ts_tip_multiline ts_tip_delay_300">
                <i class="copy_only">[</i>4:00 PM
                <i class="copy_only">]</i>
                <span class="ts_tip_tip">
                  <span class="ts_tip_multiline_inner">Dec&nbsp;31st,&nbsp;1969&nbsp;at&nbsp;4:00:00&nbsp;PM</span>
                </span>
              </a>
            </span>
          </div>
        </div>
        <span class="message_body">{{message.text.length > 0 ? message.text : 'Your message text'}}
          <template v-for="attachment of message.attachments">
            <div class="attachment_pretext for_attachment_group " v-if="attachment.content.pretext.length> 0">{{attachment.content.pretext}}</div>
            <div class="attachment_group has_border">
              <div class="inline_attachment can_delete" data-attachment-id="1">
                <div class="msg_inline_attachment_column column_border" :style="'background-color:' + attachment.content.color +';'">
                </div>
                <div class="msg_inline_attachment_column column_content">
                  <div class="msg_inline_attachment_row attachment_flush_text attachment_source">
                    <span class="attachment_source_name">
                      <a href="http://flickr.com/bobby/" rel="noreferrer" target="_blank">Bobby Tables</a>
                    </span>
                  </div>
                  <div class="msg_inline_attachment_row attachment_flush_text">
                    <div class="attachment_title">
                      <a href="https://api.slack.com/" target="_blank">
                        Slack API Documentation</a>
                    </div>
                    Optional text that appears within the attachment
                  </div>
                  <div class="msg_inline_attachment_row attachment_flush_text attachment_fields">
                    <table class="" cellpadding="0" cellspacing="0" border="0" align="left">
                      <tbody>
                        <tr>
                          <td valign="top" colspan="1" width="250">
                            <div class="attachment_field_title no_jumbomoji">Priority</div>
                            <i class="copy_only">----------------<br></i>
                            <div class="attachment_field_value no_jumbomoji short">High
                              <i class="copy_only"><br><br></i>
                            </div>
                          </td>
                          <td valign="top" colspan="1">
                            <div class="attachment_field_title no_jumbomoji">Priority</div>
                            <i class="copy_only">----------------<br></i>
                            <div class="attachment_field_value no_jumbomoji short">High
                              <i class="copy_only"><br><br></i>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" colspan="1" width="250">
                            <div class="attachment_field_title no_jumbomoji">Priority</div>
                            <i class="copy_only">----------------<br></i>
                            <div class="attachment_field_value no_jumbomoji short">High
                              <i class="copy_only"><br><br></i>
                            </div>
                          </td>
                          <td valign="top" colspan="1">
                            <div class="attachment_field_title no_jumbomoji">Priority</div>
                            <i class="copy_only">----------------<br></i>
                            <div class="attachment_field_value no_jumbomoji short">High
                              <i class="copy_only"><br><br></i>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" colspan="2">
                            <div class="attachment_field_title no_jumbomoji">Priority</div>
                            <i class="copy_only">----------------<br></i>
                            <div class="attachment_field_value no_jumbomoji ">High
                              <i class="copy_only"><br><br></i>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="msg_inline_attachment_row attachment_flush_text attachment_footer">
                    <span class="attachment_footer_text">
                      <span class="attachment_footer_icon"><img src="https://slack-imgs.com/?c=1&amp;o1=wi16.he16.si&amp;url=https%3A%2F%2Fplatform.slack-edge.com%2Fimg%2Fdefault_application_icon.png" srcset="https://slack-imgs.com/?c=1&amp;o1=wi16.he16.si&amp;url=https%3A%2F%2Fplatform.slack-edge.com%2Fimg%2Fdefault_application_icon.png 1x, https://slack-imgs.com/?c=1&amp;o1=wi32.he32.si&amp;url=https%3A%2F%2Fplatform.slack-edge.com%2Fimg%2Fdefault_application_icon.png 2x" alt=""></span>Slack API</span>
                    <span class="attachment_ts">Nov 29th, 1973 at 1:33 PM</span>
                  </div>
                  <div class="msg_inline_attachment_row attachment_actions">
                    <div class="attachment_actions_interactions">
                      <span class="attachment_actions_interactions_inner_wrapper">
                        <button class="btn btn_attachment" data-action-id="1" data-qa="button-game" title="Chess">
                          <span class="btn_attachment_text overflow_ellipsis">Chess</span>
                        </button>
                        <button class="btn btn_attachment" data-action-id="2" data-qa="button-game" title="Falken's Maze">
                          <span class="btn_attachment_text overflow_ellipsis">Falken's Maze</span>
                        </button>
                        <button class="btn btn_attachment btn_danger" data-action-id="3" data-qa="button-game" title="Thermonuclear War">
                          <span class="btn_attachment_text overflow_ellipsis">Thermonuclear War</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="delete_attachment_link" data-attachment-id="1">
                  <div class="ts-icon ts_icon_times_small"></div>
                </div>
              </div>
            </div>
          </template>
          <span class="constrain_triple_clicks"></span>
        </span>
        <i class="copy_only"><br></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "MsgPreview",
  computed: {
    ...mapGetters("msgPreview", {
      message: "getMessage"
    })
  }
}
</script>

<style scoped lang="css">
/*! CSS Used from: https://a.slack-edge.com/46689/style/rollup-slack_kit_legacy_adapters.css */
button {
  font-family: inherit;
}
/*! CSS Used from: https://a.slack-edge.com/c36e0/style/rollup-api_site.css */
.ts-icon:before {
  font-family: Slack;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  display: inline-block;
}
.ts_icon_times_small:before {
  content: "\E294";
}
.ts_tip {
  display: inline-block;
  position: relative;
  z-index: 1;
}
.ts_tip.ts_tip_multiline .ts_tip_tip {
  width: 250px;
}
.ts_tip .ts_tip_multiline_inner {
  margin: 0;
  padding: 8px 12px;
  background: #000;
  border-radius: 6px;
}
.ts_tip .ts_tip_tip {
  display: block;
  position: absolute;
  z-index: 1030;
  top: 50%;
  left: 50%;
  max-width: 250px;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  text-align: left;
  opacity: 0;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.3;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: opacity 70ms linear 50ms;
  -moz-transition: opacity 70ms linear 50ms;
  transition: opacity 70ms linear 50ms;
}
.ts_tip .ts_tip_tip .ts_tip_multiline_inner {
  display: table;
}
.ts_tip .ts_tip_tip:after {
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 0;
  height: 0;
  margin: -6px;
  border: 7px solid transparent;
}
.ts_tip.ts_tip_top .ts_tip_tip .ts_tip_multiline_inner {
  margin-left: auto;
  margin-right: auto;
}
.ts_tip.ts_tip_hidden.ts_tip_float .ts_tip_tip {
  display: none;
}
.ts_tip.ts_tip_top .ts_tip_tip {
  text-align: center;
  margin: 8px 0;
}
.ts_tip.ts_tip_top .ts_tip_tip:after {
  border-color: transparent;
}
.ts_tip.ts_tip_top .ts_tip_tip {
  top: auto;
  bottom: 100%;
}
.ts_tip.ts_tip_top .ts_tip_tip:after {
  top: auto;
  bottom: -6px;
  border-top-color: #000;
}
.constrain_triple_clicks {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.overflow_ellipsis {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
* {
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
img {
  height: auto;
  vertical-align: middle;
  border: 0;
}
a:not([href]) {
  cursor: pointer;
}
.copy_only {
  -moz-box-orient: vertical;
  display: inline-block;
  vertical-align: baseline;
  *vertical-align: auto;
  *zoom: 0;
  *display: inline;
  width: 1px;
  height: 0;
  background-size: 0;
  background-repeat: no-repeat;
  font-size: 0;
  color: transparent;
  float: left;
  text-rendering: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  opacity: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 0 1rem;
}
table td {
  padding: 0.5rem 1rem 0.5rem 0;
}
table tr {
  border-bottom: 1px solid #e8e8e8;
}
table tr:last-child {
  border-bottom: none;
}
a,
a:link,
a:visited {
  color: #0576b9;
  text-decoration: none;
}
.no_touch a:hover {
  text-decoration: underline;
}
a:active {
  color: #0576b9;
}
.btn {
  background: #008952;
  color: #fff;
  transition: all 75ms ease-in-out;
  line-height: 1.2rem;
  font-weight: 900;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  text-shadow: none;
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  white-space: nowrap;
  margin: 0;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.btn:after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.25rem;
}
.no_touch .btn:focus,
.no_touch .btn:hover {
  outline: 0;
  text-decoration: none;
}
.btn:focus,
.btn:hover {
  background: #008952;
  box-shadow: 0 1px 4px rgba(44, 45, 48, 0.3);
  color: #fff;
  transition: all 75ms ease-in-out;
}
.btn:active {
  background: #057f4e;
  color: #fff;
}
.btn:disabled,
.btn:disabled:active,
.btn:disabled:hover {
  background-color: #e8e8e8 !important;
  color: rgba(44, 45, 48, 0.75);
  box-shadow: none !important;
  pointer-events: none;
}
.btn {
  padding: 8px 14px 9px;
  font-size: 15px;
}
.btn.btn_danger {
  background-color: #d72b3f;
}
.btn.btn_attachment {
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid rgba(145, 145, 147, 0.5);
  color: #2c2d30;
  max-width: 220px;
  font-size: 13px;
  font-weight: 700;
  height: 30px;
  padding: 0 10px;
  margin: 0 8px 8px 0;
}
.btn.btn_attachment .btn_attachment_text {
  pointer-events: none;
}
.btn.btn_attachment:focus,
.btn.btn_attachment:hover {
  border-color: #919193;
}
.btn.btn_attachment:focus::after,
.btn.btn_attachment:hover::after {
  box-shadow: none;
}
.btn.btn_attachment:active {
  background-color: rgba(145, 145, 147, 0.05);
  border-color: #919193;
  box-shadow: inset 0 1px 1px 0 rgba(145, 145, 147, 0.2);
}
.btn.btn_attachment:active::after {
  box-shadow: none !important;
}
.btn.btn_attachment.btn_danger {
  background-color: transparent !important;
  border-color: rgba(215, 43, 63, 0.5);
  color: #d72b3f;
}
.btn.btn_attachment.btn_danger:focus,
.btn.btn_attachment.btn_danger:hover {
  border-color: #d72b3f;
}
.btn.btn_attachment.btn_danger:active {
  background-color: rgba(215, 43, 63, 0.02) !important;
  box-shadow: inset 0 1px 1px 0 rgba(215, 43, 63, 0.2);
  border-color: #d72b3f;
}
::-webkit-input-placeholder {
  color: #919193;
}
:-moz-placeholder {
  color: #919193;
}
::-moz-placeholder {
  color: #919193;
}
:-ms-input-placeholder {
  color: #919193;
}
a:focus,
button:focus {
  outline: 0;
}
img {
  max-width: 100%;
}
.api_doc img {
  border-radius: 0.5rem;
  border: 1px solid #ddd;
}
.page_formatting #msgs_div img {
  border: 0;
}
.page_formatting
  .ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display) {
  border: 0;
}
table tr {
  vertical-align: top;
}
/*! CSS Used from: https://a.slack-edge.com/47ff3/style/rollup-api_docs.css */
.light_theme .message_content_header {
  display: flex;
  align-items: baseline;
}
.light_theme .message_content_header_left {
  flex: 1 1 auto;
}
.bot_message .message_sender,
.bot_message .message_sender a {
  color: #2c2d30;
}
.inline_attachment {
  border-radius: 0.25rem;
  margin-left: 0;
  position: relative;
}
.inline_attachment .attachment_footer,
.inline_attachment .attachment_ts {
  color: #717274;
  font-size: 12px;
  line-height: 14px;
  padding-top: 0.25rem;
}
.inline_attachment .attachment_title {
  font-weight: 700;
  font-size: 16px;
}
.inline_attachment .attachment_fields {
  overflow: hidden;
}
.inline_attachment .attachment_fields table {
  margin-top: 0;
  margin-bottom: 0;
  float: none;
  width: 100%;
}
.inline_attachment .attachment_fields table tr {
  border-bottom: none;
}
.inline_attachment .attachment_fields table tr td {
  padding-bottom: 0.3rem;
  padding-top: 0;
  max-width: 0;
  width: inherit;
}
.inline_attachment .attachment_fields table tr:last-child td {
  padding-bottom: 0;
}
.inline_attachment .attachment_field_title {
  font-weight: 700;
}
.inline_attachment td .attachment_field_title {
  font-weight: 700;
  margin-right: 1rem;
}
.inline_attachment td .attachment_field_value {
  margin-right: 1rem;
  margin-top: -0.2rem;
}
.inline_attachment .attachment_actions {
  margin-top: 0.5rem;
}
.delete_attachment_link {
  display: none;
  position: absolute;
  top: 2px;
  left: -22px;
  color: #ddd;
  cursor: pointer;
}
.message:hover .delete_attachment_link {
  display: block;
}
.delete_attachment_link:hover {
  color: #2c2d30;
}
.ts-message {
  display: block;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border-left: none;
  border-right: none;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  color: #2c2d30;
  line-height: 22px;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  word-wrap: break-word;
  padding: 1px 40px 2px 0;
}
[lang] .ts-message {
  font-size: 15px;
}
.ts-message:focus {
  outline: 0 !important;
}
.ts-message:hover .timestamp {
  color: #717274;
}
.ts-message .message_gutter {
  text-align: right;
  position: absolute;
  top: 0;
  left: 0;
}
.ts-message .message_sender {
  display: none;
  word-break: break-word;
  font-weight: 900;
}
.ts-message .message_sender a {
  font-weight: 900;
}
.ts-message .timestamp {
  color: #717274;
  font-size: 12px;
  white-space: nowrap;
}
#msgs_div .ts-message .timestamp {
  text-decoration: none;
  cursor: default;
}
.ts-message .message_body {
  cursor: text;
}
.ts-message .message_body:empty:after {
  content: "\00a0";
}
.ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display) {
  border: 1px solid #e8e8e8;
  border-radius: 0.25rem;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-right: 0.5rem;
}
.ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display)
  .message_icon {
  margin-top: 12px;
}
.ts-message .is_pinned_holder {
  color: #717274;
  font-size: 12px;
  line-height: 12px;
  margin-left: 72px;
  position: relative;
  display: none;
  padding-top: 7px;
  min-height: 17px;
}
.light_theme .ts-message .message_gutter {
  width: 72px;
  padding-right: 10px;
}
.light_theme .ts-message .message_gutter .message_icon {
  display: none;
}
.light_theme .ts-message .message_content {
  margin-left: 72px;
}
.light_theme
  .ts-message
  .message_content
  > .message_content_header
  > .message_content_header_left
  > .message_sender {
  margin-right: 0.25rem;
}
.light_theme .ts-message .message_content .message_sender {
  font-weight: 900;
  color: #2c2d30 !important;
  line-height: 18px;
}
.light_theme .ts-message .message_content .timestamp {
  display: none;
}
.light_theme .ts-message:hover .message_gutter .timestamp {
  display: inline;
  opacity: 1;
}
.light_theme .ts-message .message_body {
  display: block;
}
.light_theme .ts-message .timestamp {
  line-height: 18px;
  opacity: 0;
}
.light_theme .ts-message.first .message_icon {
  margin-top: 4px;
  display: block;
}
.light_theme .ts-message.first .message_gutter .timestamp {
  display: none;
}
.light_theme .ts-message.first .message_content {
  margin-top: 1px;
}
.light_theme .ts-message.first .message_content .message_sender {
  display: inline-block;
}
.light_theme .ts-message.first .message_content .timestamp {
  margin-right: 0.25rem;
  opacity: 1;
  display: inline;
}
.light_theme .ts-message.first:not(.feature_file_threads) .message_body {
  margin-top: -2px;
}
.msg_inline_attachment_column {
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
  line-height: 22px;
}
.msg_inline_attachment_column.column_border {
  background-color: #e8e8e8;
  border-radius: 8px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -4px;
  width: 4px;
  z-index: 1;
}
.msg_inline_attachment_column.column_content {
  width: 100%;
}
.msg_inline_attachment_row {
  box-sizing: context-box;
  width: 100%;
  padding: 0 12px;
  margin: 12px 0;
}
.msg_inline_attachment_row.attachment_flush_text {
  margin-top: 0;
  margin-bottom: 1px;
}
.msg_inline_attachment_row.attachment_flush_text
  + .msg_inline_attachment_row:not(.attachment_flush_text) {
  margin-top: 9px;
}
.msg_inline_attachment_row.attachment_flush_text + .attachment_flush_text {
  margin-top: 1px;
}
.msg_inline_attachment_row.attachment_flush_text.attachment_source
  + .attachment_flush_text {
  margin-top: 0;
}
.msg_inline_attachment_row:first-of-type {
  margin-top: 0;
}
.msg_inline_attachment_row:first-of-type.attachment_flush_text {
  margin-top: -4px;
}
.msg_inline_attachment_row:last-of-type {
  margin-bottom: 0;
}
.attachment_group {
  max-width: 600px;
  width: 100%;
  margin: 0.4rem 0;
}
.attachment_group.has_border {
  border-left: none;
}
.attachment_group.has_border .inline_attachment {
  margin-left: 4px;
}
.attachment_group .inline_attachment {
  border-radius: 0;
  margin: 0;
  padding: 4px 0;
  font-size: 0;
  line-height: 0;
}
.attachment_group .inline_attachment .attachment_fields table {
  margin-bottom: 3px;
}
.attachment_group .inline_attachment .attachment_fields table tr td {
  width: 50%;
  max-width: 276px;
}
.attachment_group .inline_attachment .attachment_footer {
  vertical-align: middle;
  line-height: 15px;
  margin-bottom: 0;
}
.attachment_group .attachment_source {
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
}
.attachment_group .attachment_source span {
  color: #717274 !important;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
}
.attachment_group .attachment_source span a {
  color: inherit;
  font-weight: inherit;
}
.attachment_group .attachment_footer_icon img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  position: relative;
  top: -2px;
}
.attachment_group .attachment_footer_text + .attachment_ts::before {
  content: "|";
  color: #e8e8e8;
  margin: 0 0.25rem;
}
.attachment_group .inline_attachment .attachment_title {
  font-size: 15px;
}
.attachment_group .attachment_fields tr + tr .attachment_field_title {
  margin-top: 4px;
}
.attachment_group .attachment_fields td .attachment_field_value {
  margin-top: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.attachment_group .attachment_actions_interactions {
  font-size: 0;
  margin-bottom: -8px;
}
.attachment_group
  .attachment_actions_interactions
  .attachment_actions_interactions_inner_wrapper
  > :last-child {
  margin-right: 32px;
}
.attachment_group .delete_attachment_link {
  display: none;
  opacity: 1;
  left: -4px;
  top: 0;
  position: absolute;
  width: 24px;
}
.attachment_group .delete_attachment_link .ts-icon:before {
  margin-left: 2px;
  color: #919193;
  width: 15px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  vertical-align: middle;
}
.attachment_group .delete_attachment_link:hover .ts-icon:before {
  color: #2c2d30;
}
.message:hover .attachment_group .delete_attachment_link {
  display: none;
}
.attachment_group .can_delete {
  padding-left: 24px;
  left: -24px;
  margin-right: -24px;
}
.attachment_group .can_delete .column_border {
  left: 20px;
}
.attachment_group .inline_attachment:hover .delete_attachment_link {
  display: block;
}
.member_image {
  border-radius: 0.2rem;
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
}
.member_image:focus {
  outline: 0;
}
.member_image.thumb_36 {
  width: 36px;
  height: 36px;
}
.bot_icon_default {
  -webkit-border-radius: 36px !important;
  -moz-border-radius: 36px !important;
  border-radius: 36px !important;
}
.c-app_label {
  border-radius: 2px;
  font-size: 10px;
  padding: 1px 3px;
  color: #717274;
  background-color: #e8e8e8;
  display: inline-block;
  height: 14px;
  line-height: 1.25;
  font-weight: 700;
  vertical-align: 0.125rem;
}
/*! CSS Used from: https://a.slack-edge.com/bv1-4/modern.vendor.d121ebe.min.css */
.c-app_label {
  background-color: #e8e8e8;
  border-radius: 2px;
  color: #717274;
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  height: 14px;
  line-height: 1.25;
  padding: 1px 3px;
  vertical-align: 0.125rem;
}
/*! CSS Used from: https://a.slack-edge.com/1c44/style/rollup-slack_kit_helpers.css */
.copy_only {
  -moz-box-orient: vertical;
  display: inline-block;
  vertical-align: baseline;
  *vertical-align: auto;
  *zoom: 0;
  *display: inline;
  width: 1px;
  height: 0;
  background-size: 0;
  background-repeat: no-repeat;
  font-size: 0;
  color: transparent;
  float: left;
  text-rendering: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  opacity: 0;
}
.overflow_ellipsis {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
/*! CSS Used fontfaces */
@font-face {
  font-family: Slack;
  src: url(https://a.slack-edge.com/ccfa3/fonts/slack-icons/slack-icons-Regular.woff2)
      format("woff2"),
    url(https://a.slack-edge.com/ccfa3/fonts/slack-icons/slack-icons-Regular.woff)
      format("woff");
  font-style: normal;
  font-weight: 400;
}
</style>