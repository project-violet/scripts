// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
case 1064:
case 3289:
case 790:
case 301:
case 897:
case 3850:
case 1228:
case 3409:
case 4058:
case 838:
case 83:
case 3224:
case 284:
case 87:
case 227:
case 878:
case 3150:
case 3068:
case 1324:
case 1126:
case 1107:
case 1421:
case 1979:
case 2045:
case 1724:
case 3455:
case 673:
case 2769:
case 1914:
case 3728:
case 396:
case 4077:
case 2576:
case 3565:
case 495:
case 633:
case 3328:
case 4091:
case 930:
case 638:
case 67:
case 3872:
case 2092:
case 125:
case 1339:
case 678:
case 1090:
case 1093:
case 3523:
case 3520:
case 2340:
case 2343:
case 873:
case 1556:
case 1:
case 3087:
case 267:
case 508:
case 2740:
case 50:
case 2743:
case 436:
case 2034:
case 1547:
case 1161:
case 335:
case 476:
case 3599:
case 3088:
case 1831:
case 876:
case 127:
case 3852:
case 3544:
case 2395:
case 184:
case 2064:
case 695:
case 3412:
case 1548:
case 1436:
case 2389:
case 2914:
case 1576:
case 2826:
case 2789:
case 39:
case 2126:
case 377:
case 3643:
case 1045:
case 1108:
case 2093:
case 150:
case 3240:
case 3243:
case 591:
case 3804:
case 3917:
case 676:
case 393:
case 532:
case 3522:
case 225:
case 3327:
case 572:
case 739:
case 3173:
case 3306:
case 636:
case 1486:
case 4046:
case 478:
case 1959:
case 2628:
case 1181:
case 3669:
case 2161:
case 1206:
case 2466:
case 3475:
case 1227:
case 438:
case 1343:
case 1340:
case 2511:
case 506:
case 2:
case 497:
case 3067:
case 3038:
case 1881:
case 602:
case 1740:
case 906:
case 374:
case 3604:
case 3731:
case 705:
case 2994:
case 334:
case 1075:
case 2487:
case 2226:
case 2753:
case 1438:
case 2750:
case 2207:
case 932:
case 117:
case 3869:
case 1930:
case 2828:
case 2715:
case 3519:
case 972:
case 991:
case 1681:
case 1231:
case 3169:
case 2925:
case 2932:
case 3252:
case 3492:
case 187:
case 3503:
case 1373:
case 1370:
case 1401:
case 1773:
case 1281:
case 1770:
case 1631:
case 3708:
case 2772:
case 4076:
case 2577:
case 2963:
case 2591:
case 1827:
case 3445:
case 2372:
case 2055:
case 1488:
case 2626:
case 2013:
case 2437:
case 1208:
case 3143:
case 2468:
case 3429:
case 3971:
case 3140:
case 215:
case 1012:
case 3781:
case 3204:
case 3840:
case 2558:
case 2009:
case 3998:
case 1350:
case 3215:
case 3195:
case 4047:
case 1487:
case 2608:
case 1226:
case 2467:
case 1750:
case 2438:
case 1753:
case 4056:
case 4011:
case 2075:
case 600:
case 3895:
case 1994:
case 2352:
case 2231:
case 2681:
case 1932:
case 287:
case 224:
case 1661:
case 3726:
case 2578:
case 3493:
case 894:
case 1315:
case 3490:
case 3307:
case 1577:
case 1772:
case 3021:
case 3650:
case 1960:
case 1591:
case 1963:
case 2806:
case 3653:
case 1055:
case 800:
case 1372:
case 2370:
case 2373:
case 264:
case 2401:
case 1982:
case 2631:
case 2704:
case 2773:
case 694:
case 141:
case 2012:
case 1607:
case 185:
case 3272:
case 3554:
case 3842:
case 1468:
case 1288:
case 3957:
case 2024:
case 1745:
case 1667:
case 1408:
case 307:
case 891:
case 2687:
case 289:
case 2268:
case 3229:
case 3470:
case 2089:
case 872:
case 3473:
case 2598:
case 1069:
case 3284:
case 3634:
case 2461:
case 1784:
case 403:
case 2764:
case 1186:
case 3533:
case 1481:
case 1886:
case 1729:
case 1329:
case 3788:
case 2516:
case 806:
case 1900:
case 1974:
case 3245:
case 1903:
case 3562:
case 3767:
case 3645:
case 1043:
case 3738:
case 3812:
case 3338:
case 1836:
case 576:
case 3583:
case 1431:
case 3580:
case 691:
case 3292:
case 408:
case 3112:
case 40:
case 3684:
case 3234:
case 2821:
case 3006:
case 2039:
case 2393:
case 2668:
case 2390:
case 3629:
case 1267:
case 2426:
case 2793:
case 1238:
case 119:
case 603:
case 2069:
case 3028:
case 2667:
case 2745:
case 1024:
case 189:
case 3472:
case 3594:
case 80:
case 533:
case 3525:
case 808:
case 2729:
case 3768:
case 3690:
case 1095:
case 2974:
case 573:
case 331:
case 1166:
case 1364:
case 2201:
case 1764:
case 371:
case 2481:
case 2431:
case 2334:
case 2136:
case 597:
case 305:
case 2601:
case 3810:
case 3813:
case 3560:
case 3991:
case 578:
case 3113:
case 3293:
case 3290:
case 3450:
case 53:
case 538:
case 3582:
case 1668:
case 3155:
case 1426:
case 2267:
case 472:
case 1407:
case 1121:
case 1793:
case 608:
case 1039:
case 3855:
case 2392:
case 3664:
case 2801:
case 3613:
case 379:
case 2636:
case 3439:
case 339:
case 2101:
case 1266:
case 97:
case 2775:
case 3766:
case 978:
case 1518:
case 2375:
case 145:
case 129:
case 938:
case 2052:
case 111:
case 93:
case 3655:
case 1137:
case 1050:
case 1168:
case 3514:
case 25:
case 258:
case 2922:
case 2167:
case 253:
case 1221:
case 2312:
case 169:
case 499:
case 973:
case 1923:
case 2517:
case 1920:
case 2838:
case 2712:
case 4051:
case 3956:
case 3890:
case 3893:
case 2073:
case 1428:
case 798:
case 870:
case 777:
case 1355:
case 737:
case 830:
case 3193:
case 430:
case 470:
case 1406:
case 2266:
case 1944:
case 3845:
case 1101:
case 1427:
case 2015:
case 2137:
case 2965:
case 3976:
case 2053:
case 2168:
case 899:
case 281:
case 15:
case 3884:
case 158:
case 1888:
case 775:
case 3386:
case 229:
case 735:
case 976:
case 2837:
case 304:
case 1375:
case 3786:
case 2518:
case 3829:
case 2868:
case 1312:
case 3736:
case 2887:
case 2709:
case 3336:
case 2309:
case 1712:
case 2920:
case 1838:
case 2923:
case 2713:
case 1935:
case 3834:
case 1138:
case 2313:
case 2310:
case 2187:
case 3559:
case 2755:
case 147:
case 3892:
case 2355:
case 3192:
case 796:
case 2666:
case 3675:
case 699:
case 3212:
case 3469:
case 995:
case 1686:
case 1236:
case 1684:
case 1234:
case 3571:
case 1027:
case 2855:
case 559:
case 2415:
case 1629:
case 2958:
case 942:
case 3267:
case 3238:
case 2113:
case 1562:
case 2387:
case 1645:
case 3043:
case 1812:
case 2450:
case 1738:
case 2290:
case 2293:
case 3040:
case 2582:
case 1367:
case 3136:
case 3334:
case 2977:
case 3601:
case 2810:
case 1452:
case 3734:
case 1112:
case 2560:
case 741:
case 231:
case 715:
case 1692:
case 3784:
case 3384:
case 1530:
case 271:
case 822:
case 2525:
case 2737:
case 3886:
case 2693:
case 1788:
case 2368:
case 2690:
case 3900:
case 2337:
case 785:
case 3974:
case 480:
case 3638:
case 3745:
case 3345:
case 107:
case 566:
case 2472:
case 3408:
case 1229:
case 1946:
case 4059:
case 1470:
case 1701:
case 1634:
case 1958:
case 3390:
case 654:
case 1415:
case 3393:
case 3287:
case 3637:
case 3426:
case 528:
case 3121:
case 52:
case 3793:
case 3821:
case 2006:
case 724:
case 880:
case 2583:
case 4014:
case 2292:
case 1813:
case 3042:
case 1560:
case 1563:
case 2112:
case 2645:
case 1110:
case 983:
case 422:
case 1113:
case 1290:
case 1450:
case 2738:
case 2812:
case 1787:
case 2367:
case 1809:
case 1582:
case 1525:
case 2388:
case 1768:
case 3516:
case 1368:
case 1690:
case 98:
case 2788:
case 3095:
case 1337:
case 988:
case 462:
case 3902:
case 3461:
case 918:
case 3764:
case 2530:
case 2946:
case 319:
case 1264:
case 764:
case 2473:
case 3089:
case 321:
case 2634:
case 2701:
case 2284:
case 56:
case 1549:
case 3687:
case 1472:
case 1594:
case 2229:
case 2675:
case 660:
case 3666:
case 482:
case 1911:
case 923:
case 2192:
case 96:
case 2212:
case 4049:
case 2469:
case 3428:
case 1321:
case 3355:
case 1213:
case 2892:
case 2008:
case 412:
case 1721:
case 1193:
case 3710:
case 3221:
case 820:
case 727:
case 3310:
case 3313:
case 1061:
case 2505:
case 4032:
case 3887:
case 2134:
case 3923:
case 2031:
case 2386:
case 1766:
case 2184:
case 446:
case 3518:
case 2786:
case 1164:
case 329:
case 3868:
case 2829:
case 356:
case 2976:
case 1864:
case 860:
case 3137:
case 767:
case 381:
case 2129:
case 3168:
case 3621:
case 513:
case 2884:
case 2948:
case 857:
case 2145:
case 3596:
case 1026:
case 1007:
case 64:
case 940:
case 928:
case 139:
case 2275:
case 620:
case 1559:
case 2424:
case 2947:
case 347:
case 2210:
case 2213:
case 2721:
case 2190:
case 765:
case 2911:
case 3073:
case 2893:
case 3004:
case 2890:
case 966:
case 2209:
case 3686:
case 457:
case 3236:
case 1505:
case 855:
case 551:
case 586:
case 443:
case 1336:
case 1134:
case 3838:
case 460:
case 3517:
case 682:
case 353:
case 3935:
case 1834:
case 3167:
case 4030:
case 3541:
case 2255:
case 516:
case 2864:
case 7:
case 4083:
case 1440:
case 1129:
case 2579:
case 420:
case 1031:
case 4062:
case 448:
case 3052:
case 3375:
case 104:
case 1786:
case 2442:
case 2366:
case 279:
case 2609:
case 3999:
case 812:
case 3406:
case 1275:
case 3944:
case 749:
case 239:
case 1948:
case 2613:
case 2610:
case 1145:
case 959:
case 2026:
case 882:
case 2007:
case 3:
case 1087:
case 3556:
case 3511:
case 758:
case 75:
case 2038:
case 175:
case 3742:
case 62:
case 663:
case 920:
case 1689:
case 3161:
case 554:
case 2475:
case 2706:
case 2535:
case 2727:
case 293:
case 325:
case 2170:
case 2104:
case 2941:
case 2173:
case 1172:
case 2243:
case 3093:
case 1523:
case 868:
case 82:
case 3324:
case 277:
case 828:
case 3421:
case 2640:
case 1115:
case 510:
case 237:
case 840:
case 3724:
case 580:
case 1728:
case 2001:
case 365:
case 1642:
case 298:
case 3826:
case 1328:
case 29:
case 3807:
case 1996:
case 3064:
case 2152:
case 1639:
case 3228:
case 623:
case 668:
case 66:
case 1409:
case 4054:
case 2599:
case 3795:
case 2852:
case 1037:
case 1153:
case 275:
case 522:
case 946:
case 3034:
case 1669:
case 2239:
case 2689:
case 3206:
case 3227:
case 756:
case 955:
case 1067:
case 1038:
case 3740:
case 2172:
case 2695:
case 3905:
case 1873:
case 1870:
case 1243:
case 1804:
case 866:
case 1917:
case 4074:
case 4000:
case 4003:
case 440:
case 193:
case 1727:
case 1522:
case 3092:
case 4019:
case 463:
case 2242:
case 1173:
case 1941:
case 1306:
case 42:
case 1104:
case 2728:
case 46:
case 859:
case 2815:
case 1001:
case 982:
case 2565:
case 468:
case 3576:
case 1585:
case 198:
case 177:
case 1643:
case 826:
case 1640:
case 2295:
case 2455:
case 912:
case 137:
case 1599:
case 3831:
case 2224:
case 327:
case 2037:
case 2410:
case 2413:
case 384:
case 2153:
case 2068:
case 3029:
case 2150:
case 1152:
case 769:
case 3627:
case 666:
case 3606:
case 2853:
case 2850:
case 201:
case 1412:
case 3131:
case 562:
case 3084:
case 3436:
case 2554:
case 3208:
case 488:
case 1143:
case 1971:
case 2142:
case 2464:
case 41:
case 1843:
case 1273:
case 1036:
case 616:
case 3106:
case 3370:
case 721:
case 719:
case 1652:
case 3962:
case 364:
case 3773:
case 3281:
case 3770:
case 582:
case 686:
case 2839:
case 3827:
case 789:
case 651:
case 4022:
case 2889:
case 2490:
case 2493:
case 2502:
case 3578:
case 2307:
case 1519:
case 3231:
case 1500:
case 1503:
case 761:
case 2189:
case 2916:
case 1086:
case 1331:
case 1673:
case 1604:
case 886:
case 1731:
case 555:
case 3075:
case 2215:
case 816:
case 483:
case 546:
case 2672:
case 642:
case 1464:
case 315:
case 1142:
case 3558:
case 2273:
case 1361:
case 341:
case 2204:
case 883:
case 1761:
case 3009:
case 2484:
case 543:
case 486:
case 2997:
case 3010:
case 385:
case 1272:
case 1842:
case 1615:
case 2971:
case 2429:
case 2143:
case 3468:
case 560:
case 68:
case 3577:
case 2708:
case 3772:
case 980:
case 688:
case 1650:
case 1839:
case 3960:
case 3963:
case 3591:
case 1653:
case 3055:
case 2308:
case 1139:
case 3261:
case 2652:
case 3982:
case 910:
case 618:
case 613:
case 352:
case 3925:
case 2492:
case 2574:
case 1916:
case 1189:
case 442:
case 1726:
case 3315:
case 1253:
case 1493:
case 1707:
case 1490:
case 1250:
case 1889:
case 683:
case 1307:
case 2869:
case 2519:
case 520:
case 1195:
case 3487:
case 1672:
case 3226:
case 81:
case 548:
case 954:
case 818:
case 3207:
case 3753:
case 2086:
case 88:
case 2331:
case 3949:
case 2731:
case 2604:
case 2673:
case 234:
case 1895:
case 2017:
case 2430:
case 2433:
case 3147:
case 4095:
case 788:
case 362:
case 3856:
case 514:
case 2603:
case 2600:
case 3811:
case 3993:
case 584:
case 3156:
case 3354:
case 3291:
case 2041:
case 3416:
case 203:
case 3754:
case 718:
case 1391:
case 1777:
case 2822:
case 419:
case 2835:
case 1449:
case 421:
case 489:
case 2967:
case 2122:
case 2504:
case 2570:
case 2573:
case 1165:
case 1937:
case 1968:
case 3658:
case 917:
case 461:
case 2778:
case 4039:
case 3507:
case 987:
case 644:
case 1515:
case 550:
case 4042:
case 1550:
case 1553:
case 1202:
case 2346:
case 567:
case 106:
case 1460:
case 2200:
case 2274:
case 783:
case 322:
case 2357:
case 2483:
case 2899:
case 716:
case 3992:
case 621:
case 2602:
case 915:
case 1619:
case 3581:
case 1430:
case 1017:
case 985:
case 786:
case 689:
case 3005:
case 2358:
case 1135:
case 1122:
case 2820:
case 2823:
case 380:
case 1570:
case 1504:
case 565:
case 4069:
case 3508:
case 2254:
case 2494:
case 3934:
case 2120:
case 3059:
case 2449:
case 3984:
case 1885:
case 2654:
case 3246:
case 2515:
case 889:
case 1378:
case 3300:
case 549:
case 2937:
case 821:
case 3303:
case 2165:
case 3471:
case 819:
case 232:
case 3257:
case 1185:
case 2460:
case 1552:
case 1844:
case 1200:
case 1757:
case 354:
case 4043:
case 1480:
case 4040:
case 444:
case 1746:
case 1219:
case 10:
case 2202:
case 3278:
case 3848:
case 1462:
case 5:
case 1346:
case 45:
case 458:
case 2747:
case 1235:
case 2479:
case 4052:
case 348:
case 2756:
case 1543:
case 320:
case 2154:
case 2356:
case 170:
case 1699:
case 1936:
case 925:
case 726:
case 3912:
case 645:
case 3527:
case 759:
case 3506:
case 2539:
case 552:
case 1097:
case 1569:
case 2589:
case 2098:
case 2802:
case 1103:
case 3178:
case 766:
case 1244:
case 3975:
case 1803:
case 357:
case 1119:
case 4004:
case 4070:
case 1299:
case 3146:
case 2595:
case 585:
case 3799:
case 3399:
case 2623:
case 3857:
case 1748:
case 3033:
case 1635:
case 1285:
case 1622:
case 3157:
case 453:
case 3276:
case 2265:
case 811:
case 541:
case 1348:
case 1756:
case 3082:
case 445:
case 411:
case 1223:
case 1414:
case 2540:
case 2543:
case 1356:
case 1154:
case 346:
case 3060:
case 3158:
case 355:
case 1854:
case 2235:
case 967:
case 1921:
case 1479:
case 481:
case 3913:
case 1539:
case 4015:
case 950:
case 3247:
case 3323:
case 72:
case 3320:
case 270:
case 763:
case 3909:
case 728:
case 2936:
case 517:
case 847:
case 3191:
case 1102:
case 1966:
case 2803:
case 3656:
case 2800:
case 3094:
case 2986:
case 2119:
case 723:
case 382:
case 2299:
case 76:
case 3049:
case 3647:
case 3765:
case 3528:
case 2569:
case 1802:
case 1589:
case 2376:
case 3365:
case 2748:
case 927:
case 2622:
case 2285:
case 984:
case 1265:
case 2348:
case 647:
case 199:
case 1623:
case 1620:
case 3032:
case 3025:
case 295:
case 2614:
case 3759:
case 36:
case 3359:
case 3897:
case 782:
case 2077:
case 323:
case 3217:
case 2679:
case 1485:
case 712:
case 3197:
case 4045:
case 3476:
case 3171:
case 1205:
case 427:
case 3536:
case 2882:
case 1183:
case 3705:
case 1180:
case 2163:
case 3448:
case 1512:
case 2160:
case 1717:
case 1862:
case 1341:
case 2860:
case 1927:
case 4084:
case 2513:
case 2510:
case 133:
case 414:
case 1741:
case 1883:
case 3969:
case 1830:
case 2928:
case 1659:
case 13:
case 276:
case 929:
case 945:
case 2132:
case 4034:
case 236:
case 17:
case 625:
case 649:
case 1575:
case 2318:
case 197:
case 2825:
case 2832:
case 2718:
case 467:
case 3586:
case 1057:
case 1605:
case 865:
case 3074:
case 3003:
case 1422:
case 1435:
case 2849:
case 450:
case 3617:
case 328:
case 3019:
case 2423:
case 2149:
case 32:
case 340:
case 1078:
case 2194:
case 1679:
case 2485:
case 1465:
case 2205:
case 684:
case 614:
case 3521:
case 1077:
case 465:
case 867:
case 2341:
case 1510:
case 273:
case 2162:
case 2927:
case 233:
case 2883:
case 2741:
case 1509:
case 1882:
case 1058:
case 2512:
case 1163:
case 953:
case 650:
case 3566:
case 1318:
case 3816:
case 814:
case 3851:
case 1718:
case 1825:
case 2659:
case 1928:
case 3714:
case 74:
case 1132:
case 1125:
case 278:
case 3296:
case 3989:
case 3151:
case 425:
case 1420:
case 1149:
case 1423:
case 3002:
case 2078:
case 1396:
case 326:
case 3198:
case 2605:
case 667:
case 359:
case 3995:
case 2435:
case 102:
case 4093:
case 1632:
case 2419:
case 1625:
case 3020:
case 2981:
case 1590:
case 1402:
case 3651:
case 1260:
case 2797:
case 2474:
case 2403:
case 342:
case 2283:
case 2280:
case 2630:
case 2859:
case 3972:
case 2105:
case 3382:
case 3587:
case 3782:
case 624:
case 2805:
case 1316:
case 3568:
case 2529:
case 1351:
case 664:
case 3732:
case 3818:
case 1454:
case 316:
case 3725:
case 3537:
case 3325:
case 1716:
case 485:
case 4010:
case 2584:
case 1179:
case 2048:
case 1814:
case 3458:
case 3298:
case 386:
case 2680:
case 2230:
case 2683:
case 1398:
case 3950:
case 3953:
case 824:
case 1663:
case 3394:
case 547:
case 3491:
case 710:
case 3749:
case 3216:
case 2931:
case 1225:
case 3477:
case 1232:
case 1682:
case 2260:
case 2263:
case 1592:
case 3022:
case 417:
case 424:
case 2282:
case 1419:
case 1981:
case 1159:
case 100:
case 3478:
case 2590:
case 1262:
case 3817:
case 3762:
case 313:
case 4075:
case 3446:
case 2694:
case 556:
case 1805:
case 3141:
case 3973:
case 581:
case 3904:
case 529:
case 3783:
case 3841:
case 511:
case 815:
case 3780:
case 3383:
case 1534:
case 2047:
case 2926:
case 3697:
case 388:
case 2907:
case 3330:
case 38:
case 2814:
case 1048:
case 3733:
case 2114:
case 2351:
case 2454:
case 2751:
case 2716:
case 1662:
case 3952:
case 194:
case 1931:
case 921:
case 2682:
case 2232:
case 919:
case 2225:
case 1233:
case 1230:
case 2798:
case 3085:
case 2660:
case 2198:
case 896:
case 1074:
case 3435:
case 1617:
case 1019:
case 163:
case 675:
case 12:
case 1641:
case 635:
case 140:
case 2898:
case 493:
case 979:
case 33:
case 3833:
case 338:
case 2296:
case 378:
case 2411:
case 2989:
case 2314:
case 2116:
case 2566:
case 397:
case 4067:
case 2779:
case 4038:
case 2816:
case 3130:
case 2447:
case 1586:
case 1536:
case 571:
case 3317:
case 1448:
case 1305:
case 3512:
case 835:
case 4088:
case 3717:
case 531:
case 3162:
case 3927:
case 799:
case 373:
case 3444:
case 3741:
case 3883:
case 3499:
case 266:
case 1759:
case 49:
case 1241:
case 1359:
case 2521:
case 4001:
case 1217:
case 1197:
case 437:
case 477:
case 2618:
case 1943:
case 1940:
case 3796:
case 2019:
case 228:
case 877:
case 3149:
case 240:
case 837:
case 1002:
case 3194:
case 1198:
case 159:
case 3894:
case 2000:
case 2074:
case 89:
case 302:
case 2617:
case 898:
case 1566:
case 1851:
case 4087:
case 2586:
case 3832:
case 3718:
case 3825:
case 693:
case 2969:
case 435:
case 0:
case 3132:
case 376:
case 336:
case 475:
case 1456:
case 1151:
case 1939:
case 3510:
case 3513:
case 1054:
case 69:
case 401:
case 3509:
case 4037:
case 4068:
case 2705:
case 677:
case 637:
case 3163:
case 2217:
case 893:
case 2197:
case 1618:
case 3465:
case 2476:
case 2940:
case 2943:
case 395:
case 166:
case 2241:
case 2759:
case 3091:
case 3614:
case 2359:
case 496:
case 2897:
case 2085:
case 907:
case 1896:
case 1065:
case 4021:
case 1950:
case 1491:
case 1749:
case 3232:
case 1477:
case 3682:
case 1568:
case 3316:
case 1818:
case 1732:
case 3294:
case 1725:
case 1537:
case 703:
case 1332:
case 2588:
case 2099:
case 3751:
case 2697:
case 3926:
case 3179:
case 28:
case 1915:
case 834:
case 3814:
case 590:
case 1298:
case 1458:
case 2730:
case 186:
case 1118:
case 1972:
case 2780:
case 1698:
case 2271:
case 1363:
case 2841:
case 2783:
case 2117:
case 1763:
case 3047:
case 2297:
case 2457:
case 3649:
case 4066:
case 708:
case 2762:
case 3056:
case 3011:
case 2970:
case 2973:
case 2141:
case 3282:
case 3625:
case 1020:
case 674:
case 3593:
case 1651:
case 3263:
case 2022:
case 3662:
case 2196:
case 3545:
case 394:
case 2749:
case 2491:
case 2251:
case 2349:
case 3931:
case 2477:
case 3230:
case 2896:
case 2953:
case 809:
case 3584:
case 18:
case 1330:
case 1333:
case 2298:
case 1671:
case 2915:
case 251:
case 286:
case 2568:
case 1044:
case 2725:
case 2732:
case 2818:
case 2325:
case 2332:
case 931:
case 1538:
case 1817:
case 905:
case 2782:
case 706:
case 1362:
case 2587:
case 609:
case 1141:
case 2972:
case 1783:
case 2698:
case 1780:
case 183:
case 1457:
case 3534:
case 3371:
case 3403:
case 3592:
case 772:
case 3400:
case 1035:
case 3397:
case 242:
case 1022:
case 579:
case 732:
case 3630:
case 3771:
case 3859:
case 3283:
case 3159:
case 3981:
case 2020:
case 2023:
case 1478:
case 2651:
case 300:
case 2616:
case 3482:
case 934:
case 2848:
case 3550:
case 3553:
case 3202:
case 1014:
case 974:
case 3463:
case 2148:
case 3460:
case 3018:
case 122:
case 2531:
case 1079:
case 2374:
case 3968:
case 2471:
case 2929:
case 2703:
case 2497:
case 2257:
case 2774:
case 593:
case 1507:
case 1526:
case 2984:
case 2319:
case 2876:
case 2719:
case 3654:
case 2246:
case 807:
case 1302:
case 700:
case 3515:
case 537:
case 3494:
case 3254:
case 2508:
case 2934:
case 577:
case 3449:
case 3791:
case 3823:
case 59:
case 1498:
case 3987:
case 2581:
case 1856:
case 3358:
case 1561:
case 2992:
case 1354:
case 3602:
case 431:
case 1277:
case 3844:
case 1945:
case 3757:
case 535:
case 3200:
case 3480:
case 3483:
case 3746:
case 2677:
case 892:
case 3199:
case 2014:
case 2691:
case 1848:
case 3144:
case 4006:
case 2507:
case 1319:
case 2526:
case 3885:
case 1246:
case 2964:
case 3378:
case 1300:
case 1374:
case 1303:
case 1929:
case 3988:
case 1497:
case 1257:
case 3185:
case 3967:
case 3122:
case 3938:
case 2498:
case 3573:
case 3570:
case 3504:
case 110:
case 1508:
case 1646:
case 671:
case 1934:
case 3822:
case 2111:
case 2354:
case 2156:
case 2416:
case 1678:
case 2291:
case 2754:
case 2847:
case 3433:
case 1581:
case 3430:
case 262:
case 2147:
case 3600:
case 501:
case 2990:
case 1344:
case 1441:
case 490:
case 901:
case 1744:
case 1857:
case 2032:
case 1417:
case 3748:
case 3635:
case 3622:
case 1157:
case 1276:
case 3348:
case 3819:
case 3776:
case 1385:
case 2765:
case 2528:
case 879:
case 1248:
case 3174:
case 3100:
case 3103:
case 2365:
case 3376:
case 1785:
case 1178:
case 2094:
case 795:
case 3874:
case 3244:
case 2656:
case 996:
case 282:
case 3299:
case 2320:
case 3699:
case 3936:
case 3644:
case 2256:
case 1912:
case 2723:
case 2910:
case 509:
case 3071:
case 1506:
case 2891:
case 1648:
case 2247:
case 1335:
case 2877:
case 3097:
case 2418:
case 2955:
case 255:
case 3685:
case 1080:
case 935:
case 776:
case 404:
case 679:
case 3543:
case 120:
case 4031:
case 975:
case 2033:
case 2417:
case 2030:
case 3265:
case 804:
case 399:
case 2344:
case 2441:
case 3016:
case 260:
case 3620:
case 4061:
case 1032:
case 733:
case 1025:
case 99:
case 1656:
case 2975:
case 1611:
case 998:
case 1094:
case 3524:
case 1049:
case 1765:
case 1647:
case 1528:
case 3098:
case 2248:
case 2785:
case 1365:
case 1910:
case 2735:
case 2527:
case 3539:
case 2648:
case 4007:
case 2506:
case 2322:
case 1877:
case 1247:
case 1320:
case 993:
case 479:
case 1256:
case 1496:
case 604:
case 1191:
case 3756:
case 738:
case 248:
case 3711:
case 1082:
case 73:
case 24:
case 3223:
case 220:
case 778:
case 146:
case 1060:
case 1158:
case 1063:
case 3665:
case 3747:
case 3542:
case 890:
case 1418:
case 3347:
case 2080:
case 3921:
case 2083:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756994401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,];
var gg_b = "1756994401/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
