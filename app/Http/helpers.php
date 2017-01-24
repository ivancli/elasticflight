<?php
/**
 * Created by PhpStorm.
 * User: ivan.li
 * Date: 1/23/2017
 * Time: 3:28 PM
 */


if (!function_exists('vue')) {
    /**
     * Throw an HttpException with the given data.
     *
     * @param $text
     * @return string
     */
    function vue($text)
    {
        return " {{ $text }} ";
    }
}