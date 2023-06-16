#
# This is free software, licensed under the GNU General Public License v3.0
# See /LICENSE for more information.
#

include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-esfshell
PKG_VERSION:=$(if $(value GITHUB_REF_NAME),$(value GITHUB_REF_NAME),master)
PKG_RELEASE:=$(if $(value GITHUB_RUN_NUMBER),$(value GITHUB_RUN_NUMBER),1)
PKG_MAINTAINER:=SummonHIM <summonhim@qq.com>
PKG_LICENSE:=GPL-3.0

LUCI_TITLE:=LuCI Support for EsurfingShell
LUCI_DEPENDS:=+esfshell
LUCI_PKGARCH:=all

include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature