-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2024 a las 18:06:05
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `companydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `ID` int(11) NOT NULL,
  `Name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `Salary` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`ID`, `Name`, `Salary`) VALUES
(4, 'Juan', 2500),
(5, 'Ismael', 1000),
(7, 'Maria', 8600),
(8, 'Yamila', 456),
(9, 'Leonardo', 456963),
(10, 'Raul', 999),
(11, 'Pablito', 555),
(12, 'Josesito', 998877),
(15, 'Estela', 99955),
(20, 'Ismael', 963),
(28, 'susana', 987),
(29, 'Amelia', 254),
(31, 'zoe', 369),
(32, 'veronica', 963),
(33, 'liliana', 963),
(34, 'karina', 326),
(50, 'fabiana', 369),
(51, 'vamos de nuevo', 369),
(52, 'ppppp', 369),
(53, 'Angeles', 4535),
(54, 'Angeles', 4535),
(55, 'Angeles lopez', 369),
(56, 'Esteban', 125),
(57, 'marcelo', 123),
(58, 'jacinta', 987),
(59, 'probando codigo', 678),
(60, 'gustavo', 987),
(61, 'selene', 21);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
