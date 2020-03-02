/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-03-02 14:20:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
`age`  int(11) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=MyISAM
DEFAULT CHARACTER SET=latin1 COLLATE=latin1_swedish_ci
AUTO_INCREMENT=96

;

-- ----------------------------
-- Records of list
-- ----------------------------
BEGIN;
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('90', 'xyq', '20');
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('93', 'kobe', '42');
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('95', 'qq', '10');
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('69', 'zzw', '20');
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('85', 'aaa', '40');
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('75', 'james', '34');
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('76', 'cury', '24');
INSERT INTO `list` (`id`, `name`, `age`) VALUES ('80', 'qqq', '20');
COMMIT;

-- ----------------------------
-- Auto increment value for list
-- ----------------------------
ALTER TABLE `list` AUTO_INCREMENT=96;
