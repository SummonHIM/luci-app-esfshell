'use strict';
'require view';
'require form';
'require tools.widgets as widgets';

return view.extend({
    render: function () {
        var m, s, o

        m = new form.Map('esfshell',
            _('EsurfingShell'),
            _("Esurfing Campus Login Script Based on Bash Shell.") + _(" ") + '<a href="https://github.com/SummonHIM/luci-app-esfshell" target="_blank">' + _('GitHub') + '</a>' + _(" / ") + '<a href="https://github.com/SummonHIM/EsurfingShell" target="_blank">' + _('EsurfingShell GitHub') + '</a>');

        s = m.section(form.TypedSection, 'esfshell', _('EsurfingShell profiles'));
        s.anonymous = true;
        s.addremove = true;
        s.addbtntitle = _('Add instance');

        o = s.option(form.Flag, 'enabled', _('Enable'));

        o = s.option(form.Value, 'username', _('Username'));
        o.rmempty = false;

        o = s.option(form.Value, 'password', _('Password'));
        o.password = true;
        o.rmempty = false;

        o = s.option(widgets.DeviceSelect, 'interface', _('Interface'),
            _('Interface for login, logout and monitor.'))

        o = s.option(form.Flag, 'verbose', _('Verbose'),
            _('Go to') + _(" ") + '<a href="../status/logs" target="_blank">' + _('Status/System Log') + '</a>' + _(" ") + _('or using "logread -e esfshell" to get the logs.'));

        o = s.option(form.DynamicList, 'env', _("Environment variable"),
            _("Load custom environment variable for EsurfingShell."));
        o.datatype = "list(string)";

        return m.render();
    }
})