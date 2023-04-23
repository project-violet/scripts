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
var o = 0;
switch (g) {
case 762:
case 2906:
case 1157:
case 1551:
case 1262:
case 3601:
case 3071:
case 3793:
case 3381:
case 2354:
case 3960:
case 3184:
case 3335:
case 877:
case 1977:
case 73:
case 490:
case 1076:
case 589:
case 2463:
case 3541:
case 3567:
case 344:
case 3800:
case 1357:
case 1519:
case 666:
case 2713:
case 1945:
case 2459:
case 2297:
case 548:
case 88:
case 657:
case 852:
case 623:
case 2404:
case 3701:
case 271:
case 1933:
case 3419:
case 2095:
case 524:
case 2294:
case 1576:
case 1594:
case 4083:
case 2847:
case 2182:
case 447:
case 742:
case 42:
case 575:
case 2457:
case 1841:
case 231:
case 3137:
case 2180:
case 395:
case 2474:
case 3873:
case 1644:
case 3965:
case 3592:
case 3875:
case 3008:
case 3619:
case 3497:
case 198:
case 1048:
case 3607:
case 1623:
case 1217:
case 3948:
case 3236:
case 3115:
case 3814:
case 4067:
case 283:
case 2654:
case 358:
case 2090:
case 2386:
case 599:
case 428:
case 1274:
case 422:
case 3715:
case 3039:
case 3959:
case 3358:
case 1894:
case 3911:
case 3253:
case 784:
case 1340:
case 1366:
case 4018:
case 2732:
case 3998:
case 390:
case 57:
case 3485:
case 1012:
case 246:
case 1472:
case 370:
case 2955:
case 3057:
case 2082:
case 3196:
case 616:
case 1640:
case 3308:
case 911:
case 3044:
case 3817:
case 244:
case 961:
case 1752:
case 3429:
case 849:
case 2622:
case 1373:
case 4070:
case 3022:
case 2301:
case 3573:
case 126:
case 2458:
case 2356:
case 2641:
case 3967:
case 2001:
case 260:
case 1171:
case 2756:
case 2568:
case 2278:
case 1133:
case 175:
case 2507:
case 1241:
case 651:
case 1111:
case 706:
case 464:
case 1725:
case 2337:
case 1679:
case 569:
case 3920:
case 2943:
case 1195:
case 3970:
case 1385:
case 2949:
case 3791:
case 3437:
case 38:
case 1255:
case 1518:
case 1963:
case 2854:
case 3640:
case 96:
case 716:
case 3519:
case 3523:
case 3414:
case 1142:
case 462:
case 392:
case 3939:
case 3692:
case 2629:
case 771:
case 4046:
case 2199:
case 2393:
case 665:
case 2715:
case 2841:
case 2163:
case 2328:
case 2824:
case 2482:
case 600:
case 3449:
case 3172:
case 925:
case 1867:
case 1258:
case 3272:
case 3975:
case 3291:
case 515:
case 2754:
case 3712:
case 992:
case 1506:
case 3355:
case 321:
case 624:
case 1280:
case 1285:
case 1174:
case 4085:
case 1661:
case 3336:
case 2935:
case 2940:
case 808:
case 1442:
case 3461:
case 3503:
case 1439:
case 2347:
case 1552:
case 3144:
case 2594:
case 3571:
case 3807:
case 152:
case 2429:
case 1843:
case 1510:
case 677:
case 2669:
case 3505:
case 1284:
case 1447:
case 393:
case 720:
case 1504:
case 468:
case 127:
case 2287:
case 3000:
case 437:
case 868:
case 3531:
case 4076:
case 2727:
case 3205:
case 3012:
case 2262:
case 1050:
case 4086:
case 1479:
case 3685:
case 3742:
case 1187:
case 2076:
case 115:
case 1460:
case 1667:
case 1999:
case 630:
case 3066:
case 3795:
case 3845:
case 3808:
case 533:
case 3890:
case 607:
case 3618:
case 1837:
case 1403:
case 463:
case 1090:
case 1477:
case 3649:
case 2121:
case 3628:
case 2201:
case 3161:
case 1821:
case 543:
case 3530:
case 3489:
case 1984:
case 2607:
case 1850:
case 1721:
case 1897:
case 2484:
case 3080:
case 1853:
case 3937:
case 721:
case 3983:
case 2903:
case 1061:
case 3208:
case 691:
case 1637:
case 3896:
case 1965:
case 2157:
case 2014:
case 1888:
case 357:
case 3376:
case 2454:
case 483:
case 803:
case 3720:
case 618:
case 3007:
case 2141:
case 3019:
case 2771:
case 3582:
case 647:
case 1249:
case 304:
case 1521:
case 2621:
case 1723:
case 1997:
case 2259:
case 781:
case 3406:
case 356:
case 262:
case 148:
case 995:
case 1425:
case 835:
case 2871:
case 1559:
case 3255:
case 2651:
case 1049:
case 119:
case 2231:
case 93:
case 3681:
case 746:
case 2339:
case 2988:
case 2004:
case 3587:
case 3390:
case 3706:
case 2279:
case 273:
case 3065:
case 43:
case 2094:
case 3413:
case 2395:
case 3826:
case 3182:
case 1414:
case 1907:
case 1829:
case 3379:
case 2167:
case 2503:
case 1222:
case 4060:
case 445:
case 3630:
case 212:
case 13:
case 1961:
case 692:
case 1787:
case 2780:
case 2011:
case 3614:
case 4089:
case 2638:
case 488:
case 536:
case 1880:
case 2842:
case 2886:
case 1533:
case 1886:
case 2716:
case 1492:
case 531:
case 1451:
case 578:
case 3700:
case 1881:
case 3878:
case 2704:
case 2595:
case 2139:
case 1876:
case 1954:
case 1704:
case 3889:
case 3399:
case 3002:
case 1904:
case 2045:
case 3577:
case 2796:
case 1276:
case 51:
case 3733:
case 3646:
case 290:
case 3203:
case 3602:
case 2856:
case 3393:
case 893:
case 1458:
case 1380:
case 1295:
case 3913:
case 2261:
case 3093:
case 1152:
case 123:
case 516:
case 3874:
case 668:
case 3227:
case 1749:
case 3992:
case 2884:
case 1654:
case 2711:
case 1844:
case 2246:
case 1218:
case 3941:
case 3687:
case 689:
case 2366:
case 2689:
case 660:
case 2576:
case 948:
case 4013:
case 2784:
case 2874:
case 2345:
case 1877:
case 3061:
case 1298:
case 2373:
case 401:
case 584:
case 201:
case 884:
case 497:
case 2433:
case 1917:
case 1939:
case 3912:
case 311:
case 2733:
case 3421:
case 2555:
case 2518:
case 2288:
case 3121:
case 2964:
case 3314:
case 1467:
case 976:
case 699:
case 748:
case 947:
case 3553:
case 1028:
case 1443:
case 2475:
case 3871:
case 1362:
case 3280:
case 3010:
case 323:
case 1641:
case 1413:
case 1737:
case 2892:
case 1045:
case 3907:
case 4078:
case 3821:
case 1399:
case 1567:
case 1065:
case 969:
case 1589:
case 2161:
case 1882:
case 319:
case 3624:
case 221:
case 3757:
case 1795:
case 365:
case 1812:
case 3420:
case 1958:
case 1932:
case 1138:
case 1353:
case 3258:
case 3084:
case 1287:
case 737:
case 76:
case 3412:
case 722:
case 2546:
case 3735:
case 1384:
case 2537:
case 1948:
case 1078:
case 2813:
case 1629:
case 831:
case 3155:
case 1309:
case 595:
case 3385:
case 3152:
case 211:
case 2455:
case 683:
case 823:
case 435:
case 341:
case 3109:
case 1042:
case 2359:
case 4037:
case 3403:
case 2992:
case 3713:
case 2066:
case 2022:
case 294:
case 3738:
case 1608:
case 1435:
case 539:
case 3938:
case 1947:
case 3675:
case 1744:
case 2349:
case 899:
case 2480:
case 1534:
case 1892:
case 2266:
case 2550:
case 3723:
case 2136:
case 1731:
case 2042:
case 631:
case 2527:
case 1681:
case 2408:
case 403:
case 2389:
case 124:
case 3226:
case 3703:
case 69:
case 2181:
case 2619:
case 3207:
case 1068:
case 2104:
case 4075:
case 3495:
case 859:
case 1336:
case 3933:
case 2487:
case 1484:
case 2406:
case 3731:
case 865:
case 1370:
case 1455:
case 3613:
case 1405:
case 1562:
case 2452:
case 3522:
case 611:
case 2739:
case 1578:
case 1005:
case 3466:
case 1032:
case 2410:
case 2172:
case 3848:
case 3219:
case 3117:
case 346:
case 384:
case 2097:
case 1794:
case 183:
case 928:
case 2070:
case 4005:
case 1057:
case 2636:
case 3330:
case 530:
case 2405:
case 2154:
case 3539:
case 3318:
case 1547:
case 2492:
case 2634:
case 1609:
case 1791:
case 3354:
case 1739:
case 3785:
case 1949:
case 421:
case 2734:
case 659:
case 77:
case 3945:
case 1943:
case 443:
case 540:
case 2899:
case 3179:
case 1390:
case 3981:
case 218:
case 1498:
case 2999:
case 1146:
case 1784:
case 1532:
case 1423:
case 1974:
case 347:
case 1976:
case 3598:
case 1920:
case 827:
case 33:
case 3504:
case 568:
case 1151:
case 3167:
case 2844:
case 3868:
case 521:
case 434:
case 2238:
case 760:
case 1387:
case 1429:
case 1135:
case 1232:
case 791:
case 485:
case 2481:
case 1150:
case 1349:
case 2123:
case 1377:
case 1183:
case 491:
case 475:
case 2514:
case 1428:
case 2829:
case 1129:
case 121:
case 2852:
case 3914:
case 2229:
case 3892:
case 869:
case 2870:
case 136:
case 1778:
case 1517:
case 785:
case 1663:
case 142:
case 3917:
case 3134:
case 3006:
case 2020:
case 2765:
case 707:
case 909:
case 2894:
case 230:
case 1605:
case 3306:
case 3694:
case 3818:
case 1363:
case 3247:
case 2424:
case 1077:
case 2187:
case 4091:
case 886:
case 874:
case 3755:
case 286:
case 2834:
case 1692:
case 583:
case 3446:
case 3079:
case 3673:
case 3887:
case 3928:
case 942:
case 436:
case 3927:
case 10:
case 696:
case 547:
case 2603:
case 1868:
case 2321:
case 1062:
case 1682:
case 2257:
case 1811:
case 2596:
case 2936:
case 2322:
case 3440:
case 2755:
case 2005:
case 3143:
case 1541:
case 3589:
case 3507:
case 2416:
case 2571:
case 4058:
case 284:
case 343:
case 1190:
case 2263:
case 167:
case 2471:
case 338:
case 549:
case 3548:
case 1253:
case 3013:
case 3373:
case 2382:
case 2130:
case 2149:
case 158:
case 1553:
case 1193:
case 1825:
case 990:
case 3333:
case 652:
case 3942:
case 1893:
case 4079:
case 846:
case 3352:
case 2723:
case 3652:
case 106:
case 104:
case 3250:
case 3895:
case 1702:
case 1765:
case 3850:
case 2837:
case 890:
case 989:
case 3623:
case 1756:
case 1941:
case 3678:
case 2249:
case 4028:
case 3697:
case 4043:
case 2877:
case 3664:
case 2234:
case 3194:
case 1197:
case 3560:
case 137:
case 2069:
case 150:
case 3494:
case 974:
case 2397:
case 1495:
case 1992:
case 1913:
case 819:
case 1022:
case 2385:
case 838:
case 3383:
case 1646:
case 306:
case 2864:
case 312:
case 802:
case 2437:
case 2767:
case 1092:
case 3211:
case 3368:
case 3781:
case 3162:
case 128:
case 3287:
case 2963:
case 2566:
case 750:
case 1577:
case 138:
case 22:
case 954:
case 2333:
case 2018:
case 3812:
case 3554:
case 3195:
case 2483:
case 854:
case 56:
case 3888:
case 1457:
case 3099:
case 678:
case 1528:
case 2422:
case 927:
case 572:
case 3952:
case 2169:
case 2117:
case 2017:
case 3516:
case 476:
case 180:
case 374:
case 3496:
case 3388:
case 1781:
case 3566:
case 74:
case 997:
case 3173:
case 535:
case 2766:
case 2461:
case 1314:
case 406:
case 58:
case 2114:
case 1980:
case 1972:
case 61:
case 1409:
case 1093:
case 2348:
case 336:
case 1400:
case 4033:
case 1466:
case 1798:
case 3453:
case 3727:
case 2726:
case 1680:
case 145:
case 1861:
case 850:
case 2363:
case 3973:
case 3386:
case 3304:
case 2050:
case 3264:
case 1758:
case 3082:
case 2737:
case 2271:
case 1785:
case 91:
case 1139:
case 2938:
case 1847:
case 812:
case 3016:
case 27:
case 2858:
case 3686:
case 1572:
case 3188:
case 1323:
case 1964:
case 573:
case 4087:
case 1260:
case 2260:
case 1503:
case 3635:
case 2591:
case 350:
case 2029:
case 1301:
case 79:
case 1632:
case 2138:
case 1312:
case 1673:
case 3866:
case 730:
case 2882:
case 1332:
case 3699:
case 980:
case 3676:
case 1996:
case 1797:
case 1647:
case 2818:
case 3783:
case 354:
case 917:
case 2306:
case 2869:
case 1871:
case 717:
case 3394:
case 1626:
case 399:
case 291:
case 702:
case 23:
case 3802:
case 2162:
case 465:
case 1968:
case 1952:
case 1724:
case 2465:
case 3728:
case 3655:
case 2009:
case 3668:
case 48:
case 2668:
case 132:
case 1305:
case 2039:
case 2556:
case 1810:
case 4095:
case 3157:
case 3632:
case 1119:
case 3081:
case 3855:
case 4068:
case 3979:
case 1228:
case 3105:
case 719:
case 3926:
case 960:
case 54:
case 755:
case 287:
case 3794:
case 1493:
case 2251:
case 4055:
case 3149:
case 2078:
case 711:
case 3450:
case 394:
case 2096:
case 3898:
case 3508:
case 3947:
case 1233:
case 2052:
case 1326:
case 3568:
case 1612:
case 975:
case 1727:
case 2179:
case 2925:
case 1162:
case 3014:
case 2285:
case 160:
case 153:
case 1030:
case 636:
case 31:
case 796:
case 279:
case 2523:
case 2539:
case 968:
case 3231:
case 1554:
case 4077:
case 3142:
case 2204:
case 790:
case 3067:
case 3052:
case 2370:
case 496:
case 3439:
case 743:
case 1688:
case 3378:
case 602:
case 4032:
case 935:
case 1597:
case 3185:
case 1235:
case 628:
case 2252:
case 3166:
case 1885:
case 3758:
case 3042:
case 566:
case 2027:
case 3025:
case 727:
case 3283:
case 1735:
case 769:
case 2559:
case 986:
case 236:
case 3600:
case 967:
case 1067:
case 3493:
case 752:
case 1769:
case 30:
case 2970:
case 2610:
case 1624:
case 3679:
case 3824:
case 2772:
case 3925:
case 3636:
case 1779:
case 228:
case 1808:
case 2228:
case 3502:
case 2685:
case 3880:
case 2059:
case 2016:
case 3221:
case 725:
case 111:
case 1459:
case 3858:
case 3350:
case 1793:
case 3458:
case 2604:
case 1726:
case 2815:
case 1007:
case 3460:
case 3916:
case 2665:
case 2684:
case 637:
case 1486:
case 3396:
case 841:
case 1619:
case 1675:
case 2630:
case 1056:
case 3434:
case 3328:
case 4073:
case 3127:
case 3359:
case 3408:
case 3767:
case 3032:
case 2761:
case 2077:
case 2071:
case 3471:
case 2675:
case 2211:
case 1571:
case 3881:
case 1891:
case 2502:
case 450:
case 2835:
case 3048:
case 2687:
case 2013:
case 3311:
case 3637:
case 610:
case 66:
case 810:
case 2061:
case 3739:
case 372:
case 3315:
case 3882:
case 375:
case 1555:
case 873:
case 695:
case 11:
case 888:
case 3341:
case 1072:
case 3958:
case 3360:
case 698:
case 1903:
case 2470:
case 494:
case 3798:
case 726:
case 1127:
case 2905:
case 1313:
case 2696:
case 2202:
case 3654:
case 1225:
case 3893:
case 1627:
case 2741:
case 3849:
case 388:
case 176:
case 191:
case 3588:
case 2048:
case 2065:
case 429:
case 1450:
case 1426:
case 1849:
case 4038:
case 1219:
case 3542:
case 1307:
case 53:
case 2863:
case 3277:
case 2849:
case 2489:
case 2851:
case 248:
case 3591:
case 3978:
case 3131:
case 619:
case 1677:
case 2779:
case 3139:
case 3091:
case 263:
case 55:
case 1371:
case 316:
case 1436:
case 1257:
case 328:
case 3128:
case 2512:
case 3442:
case 226:
case 3021:
case 2151:
case 1342:
case 2960:
case 751:
case 3334:
case 920:
case 2300:
case 299:
case 3132:
case 1851:
case 1106:
case 430:
case 807:
case 249:
case 3865:
case 2662:
case 4004:
case 3976:
case 1666:
case 3190:
case 2175:
case 2975:
case 2846:
case 44:
case 513:
case 3962:
case 1548:
case 1248:
case 2160:
case 1910:
case 1674:
case 3275:
case 1711:
case 2898:
case 1874:
case 3191:
case 1364:
case 1655:
case 508:
case 1293:
case 427:
case 2885:
case 3201:
case 639:
case 2506:
case 1374:
case 709:
case 2574:
case 1267:
case 2845:
case 3482:
case 16:
case 3611:
case 1419:
case 2822:
case 1242:
case 1671:
case 1720:
case 2040:
case 1930:
case 359:
case 1505:
case 3527:
case 801:
case 3585:
case 52:
case 1266:
case 3804:
case 275:
case 1508:
case 3987:
case 3045:
case 1389:
case 1602:
case 4017:
case 1591:
case 125:
case 380:
case 2552:
case 2318:
case 172:
case 3327:
case 3468:
case 64:
case 414:
case 84:
case 2304:
case 1166:
case 1231:
case 3744:
case 45:
case 2362:
case 1909:
case 1569:
case 738:
case 3499:
case 2526:
case 2909:
case 3214:
case 2190:
case 2409:
case 1136:
case 1822:
case 1418:
case 173:
case 1025:
case 3509:
case 1160:
case 400:
case 1318:
case 1740:
case 2170:
case 3479:
case 3842:
case 2880:
case 2707:
case 2695:
case 3710:
case 591:
case 1348:
case 4010:
case 2499:
case 2819:
case 3990:
case 1482:
case 373:
case 2242:
case 585:
case 2932:
case 3011:
case 715:
case 2214:
case 269:
case 3438:
case 664:
case 2966:
case 3883:
case 2185:
case 3714:
case 182:
case 3745:
case 3753:
case 2757:
case 918:
case 3746:
case 257:
case 258:
case 1153:
case 732:
case 2277:
case 1358:
case 3517:
case 1339:
case 3796:
case 1361:
case 1923:
case 2272:
case 3986:
case 2868:
case 1648:
case 2243:
case 2241:
case 788:
case 2108:
case 3633:
case 1713:
case 4021:
case 926:
case 1863:
case 2997:
case 2958:
case 1767:
case 446:
case 376:
case 577:
case 3316:
case 2255:
case 1008:
case 1041:
case 3480:
case 517:
case 1755:
case 1345:
case 525:
case 2900:
case 902:
case 830:
case 71:
case 672:
case 804:
case 1531:
case 1134:
case 1445:
case 2111:
case 1388:
case 1281:
case 2807:
case 1006:
case 1638:
case 3290:
case 2768:
case 2748:
case 1081:
case 3040:
case 2305:
case 1188:
case 3995:
case 921:
case 75:
case 3534:
case 2788:
case 3046:
case 1678:
case 3289:
case 2633:
case 1478:
case 1354:
case 1198:
case 1804:
case 2582:
case 729:
case 2666:
case 3202:
case 1104:
case 2148:
case 2655:
case 2338:
case 882:
case 4052:
case 880:
case 1869:
case 565:
case 864:
case 3135:
case 1185:
case 2730:
case 4088:
case 1665:
case 63:
case 1966:
case 1033:
case 708:
case 1040:
case 2364:
case 2836:
case 387:
case 562:
case 2493:
case 1149:
case 3486:
case 2106:
case 1987:
case 2953:
case 3292:
case 1620:
case 1091:
case 2415:
case 2028:
case 1365:
case 929:
case 1564:
case 2165:
case 523:
case 1279:
case 1059:
case 2557:
case 3085:
case 2803:
case 3943:
case 2087:
case 593:
case 3498:
case 3491:
case 487:
case 3695:
case 398:
case 1501:
case 2718:
case 2753:
case 981:
case 3047:
case 3982:
case 1141:
case 2888:
case 3029:
case 1024:
case 2608:
case 817:
case 2146:
case 2293:
case 2189:
case 3286:
case 772:
case 259:
case 426:
case 1441:
case 2751:
case 829:
case 1925:
case 945:
case 833:
case 2351:
case 3454:
case 704:
case 266:
case 842:
case 4041:
case 606:
case 1883:
case 276:
case 1224:
case 1800:
case 2549:
case 1512:
case 2521:
case 649:
case 2116:
case 913:
case 3036:
case 1502:
case 2497:
case 383:
case 3932:
case 1613:
case 2084:
case 6:
case 526:
case 993:
case 442:
case 2644:
case 700:
case 3371:
case 3580:
case 1060:
case 970:
case 2919:
case 2218:
case 3856:
case 2672:
case 1971:
case 35:
case 528:
case 3268:
case 2186:
case 2562:
case 1530:
case 1168:
case 991:
case 3620:
case 3164:
case 1375:
case 3578:
case 550:
case 3510:
case 979:
case 1763:
case 944:
case 1805:
case 2978:
case 3382:
case 1175:
case 718:
case 919:
case 1180:
case 2821:
case 1027:
case 2926:
case 1835:
case 3768:
case 2611:
case 1832:
case 3391:
case 419:
case 3303:
case 3215:
case 2979:
case 3696:
case 1227:
case 582:
case 1741:
case 362:
case 3400:
case 2838:
case 3730:
case 1199:
case 1523:
case 116:
case 4014:
case 140:
case 1873:
case 2969:
case 2233:
case 2758:
case 1610:
case 777:
case 3762:
case 118:
case 766:
case 3736:
case 2995:
case 2043:
case 1935:
case 558:
case 3741:
case 3310:
case 3257:
case 1331:
case 169:
case 2498:
case 2773:
case 1544:
case 2866:
case 4023:
case 2284:
case 2640:
case 3549:
case 404:
case 2425:
case 1047:
case 1411:
case 1420:
case 1803:
case 3857:
case 3120:
case 20:
case 3232:
case 3392:
case 1760:
case 3148:
case 768:
case 1292:
case 410:
case 554:
case 2064:
case 2589:
case 3721:
case 2030:
case 2381:
case 3183:
case 2533:
case 2244:
case 3659:
case 3112:
case 1268:
case 560:
case 2375:
case 3402:
case 3897:
case 3506:
case 1683:
case 1320:
case 3556:
case 247:
case 1621:
case 3747:
case 1823:
case 1351:
case 83:
case 2224:
case 617:
case 141:
case 534:
case 3284:
case 1940:
case 604:
case 840:
case 3209:
case 3732:
case 2401:
case 2313:
case 3031:
case 3596:
case 1645:
case 3321:
case 2688:
case 3478:
case 2990:
case 1986:
case 409:
case 2984:
case 3547:
case 3418:
case 3968:
case 1590:
case 2118:
case 518:
case 2448:
case 3921:
case 1500:
case 2286:
case 21:
case 3361:
case 894:
case 1109:
case 235:
case 2683:
case 2439:
case 82:
case 1029:
case 612:
case 2875:
case 2023:
case 3825:
case 1830:
case 278:
case 1774:
case 1690:
case 2808:
case 1468:
case 453:
case 684:
case 3337:
case 4019:
case 3555:
case 2221:
case 381:
case 1995:
case 3307:
case 2365:
case 1194:
case 134:
case 2701:
case 2705:
case 1346:
case 3424:
case 385:
case 1773:
case 1097:
case 318:
case 2623:
case 1063:
case 904:
case 1016:
case 1424:
case 871:
case 295:
case 2357:
case 3252:
case 4059:
case 3971:
case 688:
case 1159:
case 1100:
case 3886:
case 3326:
case 2769:
case 764:
case 3908:
case 3103:
case 3806:
case 1983:
case 891:
case 1393:
case 49:
case 3177:
case 1914:
case 1017:
case 2744:
case 2540:
case 1001:
case 3367:
case 1607:
case 3609:
case 2344:
case 2762:
case 662:
case 2916:
case 3832:
case 2902:
case 1238:
case 3536:
case 559:
case 438:
case 3749:
case 1705:
case 1652:
case 3877:
case 1790:
case 933:
case 3329:
case 3564:
case 2329:
case 2264:
case 2740:
case 693:
case 2379:
case 1427:
case 3604:
case 3862:
case 2195:
case 1407:
case 1585:
case 40:
case 3743:
case 3944:
case 2505:
case 3123:
case 1895:
case 237:
case 2817:
case 778:
case 1520:
case 1470:
case 2616:
case 3428:
case 2543:
case 110:
case 2467:
case 3210:
case 685:
case 215:
case 2352:
case 1988:
case 149:
case 1834:
case 957:
case 2144:
case 3104:
case 1606:
case 3062:
case 2937:
case 3790:
case 1487:
case 2632:
case 3647:
case 2699:
case 3904:
case 861:
case 2642:
case 994:
case 3583:
case 506:
case 3380:
case 3569:
case 170:
case 3027:
case 1962:
case 2901:
case 3615:
case 2530:
case 164:
case 3669:
case 3810:
case 824:
case 2350:
case 943:
case 1383:
case 887:
case 1265:
case 3830:
case 1525:
case 1082:
case 2927:
case 1034:
case 2390:
case 3919:
case 267:
case 1294:
case 2785:
case 3076:
case 3357:
case 1973:
case 962:
case 934:
case 1815:
case 1167:
case 2150:
case 2790:
case 3940:
case 1449:
case 238:
case 3815:
case 3220:
case 2383:
case 2597:
case 3213:
case 4048:
case 4012:
case 1979:
case 2801:
case 2809:
case 2436:
case 1334:
case 451:
case 4027:
case 3024:
case 2657:
case 1766:
case 2026:
case 2954:
case 1397:
case 1890:
case 2700:
case 2342:
case 1437:
case 3748:
case 1071:
case 3365:
case 3900:
case 1959:
case 2798:
case 67:
case 3708:
case 2532:
case 3313:
case 3243:
case 3658:
case 1618:
case 2268:
case 2572:
case 1208:
case 2921:
case 1103:
case 2296:
case 1848:
case 641:
case 946:
case 739:
case 309:
case 2682:
case 3799:
case 1137:
case 1002:
case 2:
case 3349:
case 1124:
case 3451:
case 2129:
case 5:
case 1311:
case 1004:
case 2859:
case 2775:
case 679:
case 2677:
case 2624:
case 1846:
case 3136:
case 1230:
case 1438:
case 2635:
case 1757:
case 3056:
case 1628:
case 912:
case 1256:
case 2134:
case 1000:
case 758:
case 1870:
case 2091:
case 2075:
case 3778:
case 3448:
case 3124:
case 1499:
case 1889:
case 3650:
case 1513:
case 1158:
case 1772:
case 1545:
case 2791:
case 219:
case 3216:
case 303:
case 2310:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1682211601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,];
var gg_b = "1682211601/";

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
