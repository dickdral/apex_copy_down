/*-------------------------------------
 * APEX Copy Down
 * Version: 1.0 (03-09-2017)
 * Author:  Dick Dral
 *-------------------------------------
*/
FUNCTION render_copy_down(p_dynamic_action IN apex_plugin.t_dynamic_action,
                               p_plugin         IN apex_plugin.t_plugin)
  RETURN apex_plugin.t_dynamic_action_render_result IS
  --
  -- plugin attributes
  l_result       apex_plugin.t_dynamic_action_render_result;
  --
BEGIN
  --
  l_result.javascript_function := 'apexcopydown.doIt';
  --
  RETURN l_result;
  --
END render_copy_down;