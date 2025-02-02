// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 13:
case 1613:
case 3592:
case 1628:
case 1434:
case 2974:
case 2943:
case 1699:
case 2976:
case 2956:
case 3706:
case 678:
case 1460:
case 443:
case 3287:
case 1142:
case 1063:
case 3348:
case 1411:
case 258:
case 1270:
case 901:
case 1558:
case 3601:
case 559:
case 3917:
case 409:
case 1365:
case 2591:
case 2489:
case 1094:
case 966:
case 4081:
case 3595:
case 3754:
case 2904:
case 635:
case 82:
case 2863:
case 3070:
case 753:
case 3453:
case 3132:
case 1180:
case 393:
case 186:
case 2114:
case 3294:
case 681:
case 2906:
case 3444:
case 3776:
case 2894:
case 513:
case 3651:
case 2717:
case 1508:
case 3671:
case 2637:
case 2655:
case 1200:
case 3177:
case 778:
case 161:
case 3412:
case 497:
case 3850:
case 1602:
case 3870:
case 4064:
case 340:
case 294:
case 3310:
case 2920:
case 4066:
case 23:
case 953:
case 3509:
case 1974:
case 2434:
case 106:
case 2628:
case 1954:
case 1489:
case 1591:
case 2583:
case 2365:
case 3647:
case 541:
case 422:
case 2094:
case 4093:
case 1887:
case 2145:
case 2270:
case 158:
case 859:
case 930:
case 2578:
case 2558:
case 3415:
case 1672:
case 490:
case 1652:
case 3800:
case 286:
case 3933:
case 1863:
case 3559:
case 1116:
case 3720:
case 2338:
case 3698:
case 981:
case 701:
case 2200:
case 1675:
case 1637:
case 326:
case 2269:
case 262:
case 3343:
case 3797:
case 3376:
case 1100:
case 3356:
case 677:
case 3257:
case 3277:
case 2231:
case 1738:
case 3408:
case 1623:
case 2749:
case 3831:
case 1544:
case 3196:
case 3045:
case 3232:
case 738:
case 842:
case 2835:
case 2877:
case 2041:
case 2857:
case 3927:
case 4071:
case 896:
case 454:
case 504:
case 770:
case 1553:
case 1421:
case 1939:
case 2479:
case 1495:
case 1150:
case 682:
case 2997:
case 233:
case 1032:
case 3784:
case 3748:
case 3483:
case 2126:
case 3458:
case 2515:
case 1762:
case 670:
case 2682:
case 3207:
case 1765:
case 250:
case 729:
case 3949:
case 775:
case 1503:
case 1035:
case 777:
case 3534:
case 1057:
case 1841:
case 1077:
case 2409:
case 2727:
case 1492:
case 4001:
case 498:
case 1832:
case 334:
case 2910:
case 1231:
case 39:
case 1948:
case 2100:
case 823:
case 3422:
case 316:
case 2068:
case 4029:
case 977:
case 1214:
case 1479:
case 1459:
case 2421:
case 804:
case 2573:
case 421:
case 929:
case 157:
case 1857:
case 1041:
case 2280:
case 1877:
case 944:
case 1835:
case 3965:
case 1515:
case 3710:
case 27:
case 3014:
case 3666:
case 2333:
case 1682:
case 412:
case 2762:
case 348:
case 2170:
case 3842:
case 2495:
case 1124:
case 3664:
case 133:
case 3491:
case 2841:
case 2057:
case 2035:
case 2242:
case 702:
case 3845:
case 2492:
case 1727:
case 1807:
case 4047:
case 2390:
case 65:
case 938:
case 584:
case 1512:
case 3693:
case 2348:
case 1850:
case 612:
case 2384:
case 2706:
case 2824:
case 361:
case 4082:
case 2000:
case 2403:
case 3974:
case 3954:
case 306:
case 2704:
case 2168:
case 2592:
case 814:
case 1361:
case 560:
case 3591:
case 3489:
case 798:
case 3226:
case 2917:
case 1141:
case 836:
case 1415:
case 3887:
case 1339:
case 3605:
case 2444:
case 2397:
case 4040:
case 3906:
case 2743:
case 552:
case 2488:
case 954:
case 1800:
case 3114:
case 3116:
case 174:
case 1720:
case 1933:
case 2050:
case 2754:
case 1579:
case 3904:
case 2774:
case 1559:
case 712:
case 1698:
case 567:
case 3131:
case 2177:
case 2157:
case 3349:
case 2135:
case 3522:
case 3675:
case 126:
case 2671:
case 1629:
case 3894:
case 3434:
case 1704:
case 3628:
case 2509:
case 3362:
case 33:
case 482:
case 3613:
case 2310:
case 1384:
case 240:
case 470:
case 3460:
case 3699:
case 1824:
case 3436:
case 2415:
case 1601:
case 536:
case 80:
case 3270:
case 860:
case 2361:
case 3094:
case 3790:
case 1595:
case 1107:
case 3365:
case 94:
case 2720:
case 1132:
case 4023:
case 274:
case 3180:
case 2024:
case 1774:
case 1754:
case 1050:
case 1473:
case 1296:
case 1294:
case 1756:
case 1444:
case 3567:
case 247:
case 386:
case 3200:
case 1671:
case 3508:
case 2698:
case 867:
case 654:
case 1135:
case 58:
case 998:
case 1157:
case 2990:
case 134:
case 2163:
case 722:
case 2042:
case 3231:
case 2408:
case 2277:
case 1962:
case 2235:
case 116:
case 2814:
case 4052:
case 3269:
case 3984:
case 2869:
case 3459:
case 795:
case 2194:
case 583:
case 797:
case 3317:
case 1425:
case 3214:
case 689:
case 3216:
case 3877:
case 2467:
case 3041:
case 2232:
case 3835:
case 2045:
case 2831:
case 2207:
case 695:
case 824:
case 1630:
case 466:
case 697:
case 148:
case 2786:
case 1014:
case 789:
case 1938:
case 1664:
case 909:
case 4002:
case 2748:
case 1016:
case 333:
case 1491:
case 551:
case 3997:
case 1845:
case 3727:
case 1739:
case 790:
case 2681:
case 3512:
case 803:
case 2536:
case 2949:
case 1761:
case 3685:
case 1069:
case 2560:
case 216:
case 709:
case 3068:
case 1797:
case 1356:
case 3100:
case 435:
case 437:
case 2320:
case 1042:
case 481:
case 234:
case 3910:
case 1354:
case 1374:
case 1277:
case 1232:
case 1831:
case 3961:
case 3544:
case 1196:
case 3588:
case 1045:
case 911:
case 743:
case 3007:
case 2425:
case 990:
case 1784:
case 3032:
case 1080:
case 430:
case 3495:
case 3170:
case 3245:
case 3762:
case 248:
case 4028:
case 1304:
case 1511:
case 478:
case 2938:
case 2666:
case 4013:
case 37:
case 1478:
case 1786:
case 609:
case 1949:
case 1536:
case 453:
case 3765:
case 2069:
case 2619:
case 2031:
case 2845:
case 1187:
case 3503:
case 576:
case 3057:
case 3077:
case 3841:
case 891:
case 2367:
case 1101:
case 3819:
case 810:
case 962:
case 1885:
case 2147:
case 3893:
case 3417:
case 2266:
case 564:
case 1936:
case 202:
case 1668:
case 2456:
case 1322:
case 3866:
case 2476:
case 2744:
case 2788:
case 1281:
case 3113:
case 493:
case 175:
case 177:
case 828:
case 1023:
case 2773:
case 3903:
case 2753:
case 1018:
case 2746:
case 1934:
case 4050:
case 3081:
case 1151:
case 2085:
case 1171:
case 25:
case 933:
case 2198:
case 309:
case 3510:
case 3223:
case 3309:
case 815:
case 1657:
case 1677:
case 3680:
case 2818:
case 343:
case 2406:
case 3988:
case 2404:
case 138:
case 3539:
case 1527:
case 2378:
case 950:
case 2358:
case 3282:
case 733:
case 1230:
case 3321:
case 864:
case 655:
case 3915:
case 510:
case 2101:
case 1641:
case 1989:
case 389:
case 3102:
case 1308:
case 2420:
case 229:
case 1219:
case 244:
case 1454:
case 528:
case 2934:
case 1474:
case 1746:
case 2018:
case 750:
case 1773:
case 1443:
case 1788:
case 1293:
case 1744:
case 1476:
case 2322:
case 2936:
case 2882:
case 390:
case 275:
case 2960:
case 4026:
case 447:
case 515:
case 3586:
case 1198:
case 3631:
case 3019:
case 3711:
case 1562:
case 3155:
case 3093:
case 322:
case 2171:
case 3669:
case 3548:
case 238:
case 633:
case 1082:
case 1404:
case 3030:
case 3172:
case 1358:
case 3152:
case 539:
case 1378:
case 3614:
case 282:
case 3066:
case 2527:
case 270:
case 1818:
case 3760:
case 3395:
case 973:
case 1439:
case 3709:
case 1921:
case 2005:
case 2533:
case 961:
case 906:
case 1694:
case 1461:
case 153:
case 3389:
case 1855:
case 892:
case 1028:
case 879:
case 1872:
case 1852:
case 2486:
case 1410:
case 2229:
case 3908:
case 1251:
case 1271:
case 2778:
case 2783:
case 2484:
case 4080:
case 3123:
case 1099:
case 694:
case 2590:
case 201:
case 2909:
case 3228:
case 2193:
case 3779:
case 1181:
case 2075:
case 2055:
case 1725:
case 354:
case 3071:
case 119:
case 1805:
case 794:
case 4045:
case 2899:
case 4042:
case 3958:
case 2353:
case 2813:
case 1722:
case 2130:
case 2247:
case 2388:
case 2166:
case 2828:
case 2072:
case 135:
case 3506:
case 3047:
case 592:
case 3465:
case 3272:
case 2855:
case 994:
case 93:
case 253:
case 658:
case 2837:
case 2315:
case 3792:
case 2696:
case 1533:
case 1005:
case 1959:
case 2921:
case 4016:
case 2663:
case 525:
case 1484:
case 606:
case 1298:
case 527:
case 1448:
case 2312:
case 101:
case 3336:
case 2852:
case 3334:
case 673:
case 3140:
case 448:
case 1303:
case 2028:
case 2271:
case 1229:
case 2410:
case 4014:
case 3202:
case 3098:
case 706:
case 2687:
case 219:
case 1119:
case 518:
case 3556:
case 3543:
case 2181:
case 1037:
case 3721:
case 1909:
case 2992:
case 3029:
case 2725:
case 761:
case 1388:
case 1247:
case 416:
case 2722:
case 1344:
case 235:
case 1052:
case 758:
case 3626:
case 2201:
case 281:
case 3624:
case 434:
case 49:
case 1899:
case 398:
case 3205:
case 1373:
case 1353:
case 1881:
case 2893:
case 1321:
case 2645:
case 1597:
case 2819:
case 832:
case 3641:
case 748:
case 2864:
case 111:
case 3746:
case 2903:
case 3753:
case 2199:
case 3773:
case 1102:
case 616:
case 2642:
case 3219:
case 2113:
case 2830:
case 1912:
case 3443:
case 3040:
case 2866:
case 3476:
case 2223:
case 2510:
case 1586:
case 1631:
case 1019:
case 3085:
case 3129:
case 1669:
case 871:
case 1155:
case 1175:
case 1240:
case 863:
case 1093:
case 122:
case 3358:
case 1172:
case 3378:
case 1152:
case 2946:
case 406:
case 556:
case 2973:
case 461:
case 1736:
case 3406:
case 969:
case 243:
case 1064:
case 648:
case 197:
case 3565:
case 473:
case 3383:
case 2597:
case 2105:
case 1645:
case 934:
case 588:
case 3325:
case 2915:
case 916:
case 2282:
case 3607:
case 3911:
case 1830:
case 3960:
case 377:
case 2285:
case 769:
case 1128:
case 3936:
case 3018:
case 1642:
case 3420:
case 329:
case 2102:
case 563:
case 3171:
case 669:
case 2490:
case 222:
case 948:
case 2137:
case 2240:
case 2175:
case 571:
case 2155:
case 1309:
case 3635:
case 2711:
case 3657:
case 2019:
case 808:
case 2392:
case 3715:
case 1223:
case 1561:
case 2395:
case 3632:
case 2616:
case 1680:
case 370:
case 2064:
case 3391:
case 382:
case 2152:
case 2433:
case 2734:
case 1946:
case 1272:
case 450:
case 1252:
case 500:
case 2967:
case 2829:
case 1311:
case 747:
case 1504:
case 3979:
case 1792:
case 2427:
case 887:
case 885:
case 2118:
case 3484:
case 3002:
case 2123:
case 726:
case 1360:
case 3448:
case 14:
case 3778:
case 3229:
case 3758:
case 3486:
case 1334:
case 1462:
case 3303:
case 1237:
case 1576:
case 1801:
case 1543:
case 505:
case 4041:
case 455:
case 872:
case 626:
case 3767:
case 3119:
case 2071:
case 2847:
case 1185:
case 2051:
case 254:
case 2213:
case 740:
case 3055:
case 1554:
case 2779:
case 3909:
case 2228:
case 2759:
case 1991:
case 1626:
case 2983:
case 3166:
case 3388:
case 3247:
case 3344:
case 674:
case 3346:
case 198:
case 647:
case 1205:
case 2650:
case 3373:
case 899:
case 3353:
case 1438:
case 3708:
case 1624:
case 2978:
case 3899:
case 2504:
case 3921:
case 86:
case 793:
case 587:
case 4057:
case 940:
case 2925:
case 1427:
case 3315:
case 1001:
case 1389:
case 1967:
case 353:
case 2252:
case 2465:
case 1829:
case 2851:
case 3410:
case 47:
case 3013:
case 1908:
case 24:
case 3028:
case 2237:
case 2275:
case 3872:
case 2462:
case 2140:
case 3852:
case 2336:
case 2922:
case 1118:
case 2795:
case 3791:
case 330:
case 3663:
case 1123:
case 1520:
case 947:
case 3725:
case 945:
case 2029:
case 1071:
case 2721:
case 1779:
case 2554:
case 4007:
case 807:
case 1449:
case 2556:
case 2801:
case 2098:
case 319:
case 3805:
case 974:
case 693:
case 1670:
case 298:
case 3517:
case 1978:
case 599:
case 1958:
case 381:
case 337:
case 335:
case 926:
case 3995:
case 2182:
case 265:
case 2916:
case 1980:
case 680:
case 1862:
case 1688:
case 3886:
case 2768:
case 18:
case 1261:
case 1644:
case 1646:
case 2106:
case 1239:
case 3848:
case 1673:
case 3884:
case 1653:
case 3324:
case 672:
case 464:
case 3227:
case 2038:
case 847:
case 1049:
case 699:
case 2827:
case 2387:
case 593:
case 785:
case 1210:
case 2286:
case 1523:
case 905:
case 2931:
case 2429:
case 731:
case 1518:
case 3977:
case 3957:
case 1865:
case 874:
case 3499:
case 2612:
case 1838:
case 2174:
case 2154:
case 3636:
case 114:
case 260:
case 3660:
case 1942:
case 3714:
case 20:
case 631:
case 3428:
case 3634:
case 2176:
case 2062:
case 1603:
case 2143:
case 96:
case 840:
case 2447:
case 2757:
case 2582:
case 3611:
case 3039:
case 2396:
case 2735:
case 2615:
case 1027:
case 2653:
case 607:
case 3370:
case 2646:
case 1914:
case 410:
case 3742:
case 3265:
case 165:
case 2261:
case 28:
case 1104:
case 491:
case 3097:
case 3861:
case 1429:
case 2451:
case 2523:
case 700:
case 3455:
case 428:
case 1707:
case 3190:
case 1827:
case 152:
case 3745:
case 1540:
case 547:
case 1387:
case 1969:
case 3839:
case 2942:
case 415:
case 3086:
case 236:
case 3593:
case 1154:
case 66:
case 1612:
case 3084:
case 3402:
case 1732:
case 160:
case 1585:
case 1363:
case 3780:
case 214:
case 3048:
case 3530:
case 4009:
case 3405:
case 1396:
case 1582:
case 931:
case 1849:
case 2401:
case 3566:
case 1615:
case 439:
case 1065:
case 540:
case 1447:
case 1297:
case 2466:
case 2924:
case 3876:
case 3217:
case 1678:
case 3856:
case 569:
case 3314:
case 3843:
case 1970:
case 268:
case 1950:
case 663:
case 3695:
case 956:
case 2763:
case 2332:
case 103:
case 4060:
case 3874:
case 1683:
case 2796:
case 2357:
case 2274:
case 3149:
case 2335:
case 3692:
case 848:
case 732:
case 1513:
case 3369:
case 908:
case 2276:
case 1599:
case 2243:
case 2794:
case 1900:
case 3418:
case 688:
case 2537:
case 3806:
case 2148:
case 632:
case 3020:
case 3423:
case 3963:
case 2186:
case 3804:
case 2622:
case 1017:
case 2307:
case 89:
case 3996:
case 1161:
case 1139:
case 2206:
case 3994:
case 2787:
case 2572:
case 1341:
case 323:
case 384:
case 3547:
case 2683:
case 1926:
case 1464:
case 1332:
case 1:
case 1924:
case 1466:
case 2658:
case 869:
case 276:
case 1430:
case 1505:
case 2970:
case 3485:
case 4089:
case 425:
case 1243:
case 2599:
case 2481:
case 1276:
case 1493:
case 151:
case 1335:
case 971:
case 1357:
case 1377:
case 2513:
case 2220:
case 1419:
case 2110:
case 3440:
case 3290:
case 342:
case 396:
case 3074:
case 1555:
case 3770:
case 2900:
case 3750:
case 1184:
case 3342:
case 1148:
case 2139:
case 708:
case 2667:
case 2341:
case 1572:
case 1552:
case 1625:
case 3165:
case 59:
case 2890:
case 2017:
case 534:
case 3679:
case 213:
case 618:
case 2324:
case 725:
case 3106:
case 1350:
case 2848:
case 4022:
case 3104:
case 3768:
case 1097:
case 1265:
case 1472:
case 2932:
case 1452:
case 1455:
case 620:
case 2935:
case 1475:
case 1262:
case 1437:
case 2957:
case 2977:
case 4025:
case 3429:
case 3284:
case 746:
case 3387:
case 1839:
case 352:
case 1745:
case 3062:
case 2428:
case 2634:
case 3156:
case 2714:
case 1519:
case 1402:
case 1084:
case 2660:
case 3585:
case 4091:
case 2716:
case 1780:
case 3363:
case 2968:
case 2636:
case 2249:
case 141:
case 2499:
case 3612:
case 2581:
case 2731:
case 1238:
case 718:
case 1566:
case 3615:
case 456:
case 627:
case 625:
case 1405:
case 3582:
case 561:
case 3297:
case 3065:
case 1689:
case 1564:
case 2769:
case 3688:
case 2133:
case 1886:
case 432:
case 3261:
case 38:
case 3644:
case 1932:
case 2472:
case 3862:
case 2265:
case 4008:
case 920:
case 1324:
case 3646:
case 2350:
case 1848:
case 1884:
case 3653:
case 4067:
case 3518:
case 2437:
case 2262:
case 3865:
case 1935:
case 2455:
case 3451:
case 2861:
case 2780:
case 314:
case 979:
case 4083:
case 3120:
case 2084:
case 2402:
case 1581:
case 1499:
case 241:
case 1636:
case 2593:
case 1968:
case 1634:
case 2300:
case 3603:
case 336:
case 927:
case 2086:
case 4078:
case 1010:
case 159:
case 925:
case 1897:
case 2519:
case 3945:
case 946:
case 1061:
case 1769:
case 2941:
case 2689:
case 861:
case 806:
case 2566:
case 3401:
case 1611:
case 1039:
case 2530:
case 1138:
case 3464:
case 3926:
case 2854:
case 3332:
case 3763:
case 2316:
case 550:
case 3:
case 617:
case 4012:
case 1547:
case 1482:
case 1700:
case 3505:
case 3033:
case 2314:
case 2843:
case 2876:
case 3794:
case 639:
case 3090:
case 3256:
case 533:
case 2987:
case 3502:
case 2331:
case 4015:
case 3254:
case 1609:
case 3274:
case 2149:
case 3377:
case 87:
case 610:
case 1043:
case 3368:
case 739:
case 1162:
case 1076:
case 142:
case 1290:
case 11:
case 2963:
case 3186:
case 1598:
case 407:
case 3184:
case 691:
case 2423:
case 2571:
case 2551:
case 1529:
case 204:
case 3148:
case 196:
case 1770:
case 1750:
case 628:
case 2127:
case 964:
case 3787:
case 1345:
case 1679:
case 1659:
case 2996:
case 1233:
case 1165:
case 3970:
case 487:
case 2004:
case 2482:
case 4003:
case 1217:
case 1876:
case 1856:
case 1501:
case 939:
case 1316:
case 2380:
case 3683:
case 2138:
case 431:
case 284:
case 1695:
case 850:
case 2820:
case 1692:
case 349:
case 3528:
case 833:
case 1369:
case 915:
case 2485:
case 1551:
case 1724:
case 3608:
case 1423:
case 3900:
case 480:
case 2770:
case 4046:
case 2074:
case 296:
case 2056:
case 242:
case 928:
case 2440:
case 855:
case 2043:
case 3110:
case 2598:
case 1726:
case 21:
case 991:
case 2233:
case 2659:
case 3890:
case 862:
case 123:
case 2345:
case 1971:
case 9:
case 1951:
case 2929:
case 2431:
case 4039:
case 3435:
case 256:
case 2867:
case 3747:
case 3393:
case 624:
case 1825:
case 1385:
case 3879:
case 2469:
case 3859:
case 1596:
case 208:
case 1382:
case 603:
case 3330:
case 2279:
case 4010:
case 2414:
case 3366:
case 2091:
case 3364:
case 676:
case 822:
case 1480:
case 1083:
case 163:
case 3146:
case 3095:
case 1594:
case 3550:
case 3570:
case 1755:
case 3407:
case 1737:
case 3258:
case 2025:
case 3798:
case 3809:
case 983:
case 890:
case 1292:
case 364:
case 1160:
case 1891:
case 2883:
case 2878:
case 3468:
case 2858:
case 724:
case 132:
case 3999:
case 1587:
case 1752:
case 1772:
case 889:
case 976:
case 2825:
case 843:
case 3222:
case 1690:
case 3821:
case 1998:
case 2563:
case 597:
case 2385:
case 595:
case 903:
case 1431:
case 339:
case 1929:
case 2951:
case 1867:
case 3009:
case 3937:
case 3975:
case 263:
case 2083:
case 949:
case 1416:
case 4084:
case 668:
case 2702:
case 4048:
case 3952:
case 3972:
case 1091:
case 441:
case 1799:
case 3606:
case 1808:
case 271:
case 1279:
case 1259:
case 6:
case 3604:
case 1633:
case 2596:
case 2822:
case 317:
case 4086:
case 315:
case 2058:
case 3526:
case 3441:
case 3115:
case 3291:
case 2445:
case 2295:
case 3892:
case 3079:
case 3059:
case 511:
case 2755:
case 3905:
case 2775:
case 328:
case 1025:
case 42:
case 3771:
case 2901:
case 2617:
case 3643:
case 1022:
case 3676:
case 2340:
case 3656:
case 589:
case 2134:
case 288:
case 683:
case 2587:
case 751:
case 2160:
case 310:
case 2008:
case 1323:
case 3895:
case 2292:
case 2136:
case 3654:
case 1209:
case 3674:
case 1883:
case 2891:
case 1318:
case 3112:
case 736:
case 423:
case 1981:
case 2993:
case 1649:
case 1236:
case 1234:
case 1355:
case 1375:
case 1337:
case 3203:
case 967:
case 3542:
case 965:
case 3329:
case 2919:
case 172:
case 3158:
case 2964:
case 207:
case 1352:
case 2803:
case 68:
case 1812:
case 554:
case 4020:
case 2638:
case 3183:
case 1211:
case 180:
case 1046:
case 1073:
case 952:
case 1470:
case 3288:
case 3661:
case 1121:
case 2179:
case 3244:
case 3793:
case 1785:
case 90:
case 1532:
case 2665:
case 2015:
case 3719:
case 3011:
case 3273:
case 3253:
case 636:
case 2846:
case 200:
case 3764:
case 3463:
case 3036:
case 1782:
case 1577:
case 185:
case 614:
case 2662:
case 1535:
case 3610:
case 2844:
case 2313:
case 3766:
case 26:
case 2375:
case 598:
case 2234:
case 1919:
case 3351:
case 299:
case 3371:
case 320:
case 2192:
case 3985:
case 1109:
case 2236:
case 2649:
case 2568:
case 2981:
case 2815:
case 1424:
case 1723:
case 2053:
case 665:
case 1930:
case 496:
case 3982:
case 2195:
case 1718:
case 280:
case 2044:
case 4043:
case 272:
case 4056:
case 442:
case 2740:
case 2088:
case 1289:
case 41:
case 2372:
case 1541:
case 1426:
case 105:
case 3514:
case 2627:
case 914:
case 379:
case 767:
case 512:
case 2305:
case 936:
case 2121:
case 3781:
case 3089:
case 3516:
case 4004:
case 2400:
case 285:
case 2577:
case 2782:
case 287:
case 346:
case 1313:
case 1844:
case 1888:
case 3686:
case 1853:
case 3648:
case 2302:
case 392:
case 1399:
case 231:
case 3940:
case 1012:
case 4006:
case 1821:
case 2879:
case 3469:
case 3998:
case 2393:
case 1222:
case 1381:
case 3690:
case 2457:
case 1937:
case 1975:
case 882:
case 2319:
case 838:
case 2208:
case 3929:
case 1701:
case 139:
case 2092:
case 2153:
case 2173:
case 3799:
case 1606:
case 3808:
case 2267:
case 1952:
case 3091:
case 2364:
case 2366:
case 684:
case 3713:
case 115:
case 2144:
case 1604:
case 2330:
case 3633:
case 308:
case 2188:
case 452:
case 502:
case 3947:
case 2283:
case 2809:
case 1115:
case 784:
case 3189:
case 1771:
case 1524:
case 2258:
case 829:
case 2407:
case 1079:
case 2021:
case 844:
case 2570:
case 1905:
case 465:
case 2103:
case 3022:
case 1676:
case 1656:
case 2468:
case 2928:
case 1654:
case 1674:
case 3883:
case 61:
case 2620:
case 923:
case 110:
case 3323:
case 538:
case 1500:
case 2975:
case 2937:
case 1457:
case 2009:
case 582:
case 4027:
case 570:
case 3563:
case 1879:
case 1859:
case 2821:
case 2381:
case 3825:
case 704:
case 1393:
case 215:
case 3078:
case 217:
case 1366:
case 3822:
case 1188:
case 85:
case 3596:
case 723:
case 3382:
case 3221:
case 1330:
case 436:
case 1144:
case 371:
case 1173:
case 1153:
case 1364:
case 3702:
case 3480:
case 363:
case 1278:
case 2771:
case 544:
case 1550:
case 942:
case 3755:
case 1570:
case 2059:
case 1021:
case 2079:
case 3111:
case 3295:
case 2892:
case 996:
case 3445:
case 1798:
case 1809:
case 3067:
case 2441:
case 1283:
case 2112:
case 3891:
case 2654:
case 164:
case 2895:
case 210:
case 3008:
case 1913:
case 1620:
case 3160:
case 3752:
case 388:
case 3772:
case 1468:
case 1999:
case 2643:
case 332:
case 48:
case 3919:
case 2329:
case 1351:
case 1371:
case 2542:
case 2889:
case 2203:
case 881:
case 837:
case 3109:
case 3993:
case 835:
case 62:
case 1212:
case 913:
case 2398:
case 120:
case 1811:
case 1985:
case 1860:
case 3930:
case 1982:
case 3718:
case 2183:
case 1836:
case 3723:
case 1215:
case 1191:
case 3289:
case 2178:
case 307:
case 1834:
case 3426:
case 819:
case 118:
case 566:
case 2273:
case 2639:
case 2011:
case 3015:
case 179:
case 3665:
case 1125:
case 1089:
case 1516:
case 125:
case 2580:
case 830:
case 2793:
case 2244:
case 2661:
case 501:
case 4090:
case 451:
case 36:
case 3313:
case 2766:
case 3888:
case 641:
case 2730:
case 3662:
case 4033:
case 2918:
case 146:
case 3399:
case 72:
case 1940:
case 853:
case 3012:
case 2463:
case 2060:
case 3846:
case 300:
case 2108:
case 1648:
case 3815:
case 2212:
case 3981:
case 3649:
case 3568:
case 759:
case 2811:
case 537:
case 581:
case 2371:
case 4017:
case 3234:
case 3355:
case 3375:
case 1203:
case 3337:
case 1889:
case 519:
case 1178:
case 92:
case 3740:
case 2697:
case 3046:
case 380:
case 3211:
case 2982:
case 3470:
case 3053:
case 2860:
case 2191:
case 2215:
case 3812:
case 1183:
case 225:
case 2516:
case 530:
case 2125:
case 801:
case 1288:
case 1494:
case 713:
case 1244:
case 1246:
case 941:
case 2301:
case 424:
case 866:
case 3627:
case 2514:
case 2940:
case 659:
case 2569:
case 1108:
case 1060:
case 1463:
case 2684:
case 1610:
case 2686:
case 1923:
case 2531:
case 3557:
case 385:
case 3577:
case 1918:
case 3535:
case 2122:
case 1730:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1738458002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,];
var gg_b = "1738458002/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
