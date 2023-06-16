'use strict';
'require view';
'require form';
'require tools.widgets as widgets';

return view.extend({
    render: function () {
        var m, s, o

        m = new form.Map('esfshell',
            _('EsurfingShell'),
            _("Esurfing Campus Login Script Based on Bash Shell."));

        s = m.section(form.TypedSection, 'esfshell', _('EsurfingShell profiles'));
        s.anonymous = true;
        s.addremove = true;
        s.addbtntitle = _('Add instance');

        o = s.option(form.Flag, 'enabled', _('Enable'));

        o = s.option(form.Value, 'username', _('Username'));

        o = s.option(form.Value, 'password', _('Password'));
        o.password=true;

        o = s.option(widgets.DeviceSelect, 'interface', _('Interface'),
            _('Interface for login, logout and monitor.'))

        o = s.option(form.DynamicList, 'env', _("Environment variable"),
            _("Load custom environment variable for EsurfingShell."));
		o.datatype = "list(string)";

        return m.render();
    }
})