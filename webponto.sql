-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 18-Ago-2020 às 02:26
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `webponto`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `marcacao`
--

DROP TABLE IF EXISTS `marcacao`;
CREATE TABLE IF NOT EXISTS `marcacao` (
  `nrmarcacao` int(11) NOT NULL AUTO_INCREMENT,
  `nrpessoa` int(11) NOT NULL,
  `dtmarcacao` date NOT NULL,
  `hrmarcacao` time NOT NULL,
  PRIMARY KEY (`nrmarcacao`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Extraindo dados da tabela `marcacao`
--

INSERT INTO `marcacao` (`nrmarcacao`, `nrpessoa`, `dtmarcacao`, `hrmarcacao`) VALUES
(1, 5, '2020-08-17', '18:55:32'),
(2, 5, '2020-08-17', '19:17:33'),
(3, 5, '2020-08-17', '19:23:53'),
(7, 5, '2020-08-17', '19:26:02'),
(8, 6, '2020-08-17', '21:22:35'),
(9, 6, '2020-08-17', '21:23:43'),
(10, 5, '2020-08-18', '21:32:38'),
(11, 5, '2020-08-18', '21:32:57'),
(12, 5, '2020-08-18', '21:35:45'),
(13, 5, '2020-08-18', '21:35:51'),
(14, 5, '2020-08-19', '21:36:03'),
(15, 5, '2020-08-19', '21:36:13'),
(16, 5, '2020-08-19', '21:36:20'),
(17, 5, '2020-08-19', '21:36:26'),
(18, 5, '2020-08-20', '21:47:18'),
(19, 5, '2020-08-20', '21:47:19');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
CREATE TABLE IF NOT EXISTS `pessoa` (
  `nrpessoa` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `dtnasc` date DEFAULT NULL,
  `email` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `telefone` varchar(30) COLLATE utf32_unicode_ci DEFAULT NULL,
  `horasDia` time DEFAULT NULL,
  `senha` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  PRIMARY KEY (`nrpessoa`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Extraindo dados da tabela `pessoa`
--

INSERT INTO `pessoa` (`nrpessoa`, `nome`, `dtnasc`, `email`, `telefone`, `horasDia`, `senha`) VALUES
(1, 'rafael', '2020-07-01', 'rafaelneves.130', '3133333', '00:00:00', '123456'),
(5, 'Rafael Neves', NULL, 'rafaelneves.130@gmail.com', NULL, NULL, '123'),
(6, 'pedro', '2000-01-10', 'teste@hotmail.com', '31 3333 4259', '08:00:00', '1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
