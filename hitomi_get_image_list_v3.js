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
var o = 0;
switch (g) {
case 1713:
case 3653:
case 2603:
case 553:
case 2921:
case 3922:
case 3075:
case 2211:
case 892:
case 3279:
case 984:
case 2519:
case 1299:
case 1852:
case 1801:
case 1967:
case 417:
case 326:
case 1255:
case 1707:
case 2618:
case 1950:
case 15:
case 2377:
case 2630:
case 985:
case 2468:
case 150:
case 2389:
case 2682:
case 3113:
case 2061:
case 3062:
case 3400:
case 3056:
case 3523:
case 1264:
case 1276:
case 1421:
case 1245:
case 473:
case 2157:
case 1842:
case 1028:
case 1027:
case 2785:
case 2160:
case 387:
case 2950:
case 2708:
case 3758:
case 3205:
case 2255:
case 1617:
case 2014:
case 3009:
case 3337:
case 3338:
case 2874:
case 3851:
case 2852:
case 3802:
case 2299:
case 1554:
case 1726:
case 592:
case 521:
case 1519:
case 744:
case 2035:
case 1440:
case 859:
case 3592:
case 1603:
case 2713:
case 2591:
case 148:
case 1921:
case 2027:
case 3933:
case 1160:
case 1624:
case 1785:
case 3516:
case 3841:
case 289:
case 842:
case 625:
case 3883:
case 3748:
case 1157:
case 3747:
case 2276:
case 298:
case 2421:
case 2363:
case 1450:
case 88:
case 1006:
case 1061:
case 4067:
case 1467:
case 3126:
case 3310:
case 506:
case 1630:
case 769:
case 40:
case 1944:
case 2375:
case 2145:
case 2176:
case 2346:
case 726:
case 1491:
case 1038:
case 2634:
case 1309:
case 3593:
case 1602:
case 3711:
case 3078:
case 182:
case 2419:
case 997:
case 3226:
case 1086:
case 2472:
case 646:
case 3533:
case 1431:
case 1098:
case 3818:
case 1097:
case 3404:
case 565:
case 2991:
case 3423:
case 637:
case 2669:
case 701:
case 1248:
case 3992:
case 3105:
case 888:
case 1521:
case 614:
case 2356:
case 2881:
case 3285:
case 1919:
case 2788:
case 787:
case 3890:
case 1010:
case 2796:
case 394:
case 2931:
case 1229:
case 1954:
case 2199:
case 2465:
case 2568:
case 140:
case 1683:
case 2567:
case 2444:
case 1111:
case 3500:
case 2550:
case 231:
case 1694:
case 2097:
case 1454:
case 3432:
case 344:
case 2431:
case 3480:
case 67:
case 2573:
case 754:
case 1472:
case 3739:
case 865:
case 3666:
case 3674:
case 158:
case 2038:
case 4054:
case 3601:
case 2651:
case 3652:
case 1634:
case 3335:
case 176:
case 1164:
case 1176:
case 1346:
case 3136:
case 3208:
case 2705:
case 3755:
case 2257:
case 1615:
case 2944:
case 2965:
case 3188:
case 2260:
case 1550:
case 4065:
case 811:
case 864:
case 1139:
case 2641:
case 3349:
case 2111:
case 3584:
case 1567:
case 2683:
case 369:
case 755:
case 1199:
case 1465:
case 2010:
case 599:
case 2229:
case 3904:
case 3416:
case 1843:
case 2919:
case 2025:
case 2972:
case 1881:
case 852:
case 1356:
case 316:
case 3745:
case 1991:
case 2521:
case 670:
case 443:
case 109:
case 1721:
case 2536:
case 1828:
case 1827:
case 1926:
case 2596:
case 923:
case 2587:
case 103:
case 2390:
case 2:
case 50:
case 3265:
case 125:
case 3343:
case 3069:
case 2907:
case 3957:
case 2861:
case 2317:
case 1074:
case 648:
case 2318:
case 1066:
case 2678:
case 2677:
case 3034:
case 1052:
case 4007:
case 464:
case 500:
case 3094:
case 256:
case 1814:
case 1859:
case 3121:
case 3947:
case 1100:
case 2740:
case 3511:
case 278:
case 3875:
case 2579:
case 4013:
case 1985:
case 1280:
case 904:
case 1895:
case 2303:
case 124:
case 1232:
case 3784:
case 912:
case 1861:
case 739:
case 1908:
case 3140:
case 1689:
case 1907:
case 689:
case 775:
case 733:
case 698:
case 1:
case 586:
case 1768:
case 3041:
case 1587:
case 2216:
case 2663:
case 2926:
case 2828:
case 3722:
case 650:
case 2721:
case 1913:
case 4085:
case 3448:
case 3447:
case 1223:
case 3083:
case 1324:
case 2895:
case 1303:
case 1204:
case 2232:
case 224:
case 499:
case 65:
case 1426:
case 2985:
case 488:
case 1512:
case 1579:
case 178:
case 2100:
case 3150:
case 493:
case 3291:
case 3555:
case 2859:
case 3686:
case 32:
case 332:
case 3697:
case 2408:
case 3457:
case 3051:
case 2052:
case 3002:
case 3637:
case 3638:
case 1677:
case 800:
case 237:
case 2132:
case 170:
case 3131:
case 3268:
case 1341:
case 1171:
case 3024:
case 534:
case 1284:
case 2905:
case 2192:
case 3191:
case 480:
case 453:
case 1070:
case 31:
case 781:
case 3030:
case 1979:
case 3889:
case 2656:
case 3090:
case 2585:
case 2496:
case 930:
case 667:
case 459:
case 631:
case 2488:
case 1825:
case 328:
case 3878:
case 3964:
case 3877:
case 922:
case 3976:
case 102:
case 1838:
case 690:
case 573:
case 1837:
case 1791:
case 991:
case 3240:
case 1513:
case 2754:
case 215:
case 3704:
case 1898:
case 3017:
case 1897:
case 2233:
case 3771:
case 676:
case 2772:
case 2334:
case 1609:
case 1302:
case 1987:
case 658:
case 2116:
case 48:
case 2675:
case 2053:
case 1507:
case 246:
case 1405:
case 1043:
case 508:
case 492:
case 1488:
case 2810:
case 3716:
case 2912:
case 2979:
case 941:
case 1081:
case 3476:
case 2222:
case 3221:
case 1905:
case 718:
case 3627:
case 296:
case 2284:
case 3628:
case 3119:
case 1765:
case 3649:
case 1180:
case 3172:
case 137:
case 720:
case 1744:
case 3154:
case 161:
case 834:
case 2123:
case 3455:
case 3695:
case 919:
case 27:
case 3558:
case 2508:
case 1675:
case 406:
case 3560:
case 1233:
case 3301:
case 966:
case 2351:
case 64:
case 2302:
case 3165:
case 1526:
case 3732:
case 1754:
case 3614:
case 115:
case 835:
case 374:
case 2996:
case 2898:
case 2837:
case 2513:
case 1479:
case 1065:
case 431:
case 49:
case 2117:
case 556:
case 2118:
case 1044:
case 305:
case 2322:
case 3321:
case 3463:
case 2283:
case 981:
case 3845:
case 329:
case 1938:
case 3977:
case 3864:
case 3978:
case 127:
case 1888:
case 730:
case 1887:
case 3153:
case 824:
case 2241:
case 1896:
case 3242:
case 1998:
case 3016:
case 2528:
case 1879:
case 3092:
case 2437:
case 2091:
case 272:
case 1072:
case 1220:
case 68:
case 3899:
case 1019:
case 3032:
case 458:
case 2031:
case 2498:
case 304:
case 3608:
case 1910:
case 2658:
case 3989:
case 3607:
case 2657:
case 825:
case 476:
case 3613:
case 1753:
case 3201:
case 2202:
case 3252:
case 1294:
case 2559:
case 2805:
case 1393:
case 3509:
case 5:
case 20:
case 2182:
case 3181:
case 3790:
case 2896:
case 2997:
case 3489:
case 1410:
case 1527:
case 2986:
case 1103:
case 2887:
case 227:
case 1425:
case 2743:
case 2888:
case 777:
case 3782:
case 4010:
case 1549:
case 524:
case 2938:
case 1384:
case 3685:
case 3556:
case 2506:
case 3724:
case 312:
case 918:
case 440:
case 3562:
case 1629:
case 1118:
case 2269:
case 1117:
case 100:
case 621:
case 2065:
case 10:
case 3626:
case 286:
case 3170:
case 1182:
case 338:
case 1130:
case 1805:
case 2393:
case 719:
case 2234:
case 8:
case 2753:
case 44:
case 3703:
case 4037:
case 1031:
case 1497:
case 3004:
case 2215:
case 2910:
case 3071:
case 2220:
case 766:
case 1660:
case 3546:
case 3478:
case 3477:
case 4086:
case 503:
case 2879:
case 2812:
case 1091:
case 3811:
case 3975:
case 2449:
case 2021:
case 1282:
case 1935:
case 279:
case 2194:
case 515:
case 2525:
case 3829:
case 723:
case 2134:
case 1151:
case 1290:
case 235:
case 2510:
case 2427:
case 665:
case 2115:
case 705:
case 2645:
case 546:
case 2664:
case 4061:
case 1068:
case 3084:
case 3563:
case 1959:
case 2701:
case 1141:
case 3702:
case 2752:
case 1203:
case 217:
case 2774:
case 3860:
case 1304:
case 2332:
case 870:
case 3331:
case 3962:
case 2699:
case 2961:
case 3391:
case 3409:
case 2459:
case 2906:
case 3956:
case 2807:
case 514:
case 896:
case 1949:
case 2435:
case 391:
case 910:
case 3605:
case 2586:
case 1217:
case 2655:
case 2169:
case 2495:
case 664:
case 2597:
case 448:
case 1826:
case 2406:
case 3456:
case 2914:
case 846:
case 2323:
case 3462:
case 450:
case 2224:
case 3688:
case 933:
case 1120:
case 1316:
case 2067:
case 975:
case 1115:
case 3769:
case 498:
case 3344:
case 815:
case 3166:
case 3589:
case 4049:
case 3174:
case 1427:
case 489:
case 1525:
case 2151:
case 2290:
case 3101:
case 1742:
case 173:
case 3152:
case 2995:
case 2230:
case 179:
case 2935:
case 1449:
case 2282:
case 751:
case 1598:
case 3033:
case 3720:
case 2927:
case 366:
case 1655:
case 1169:
case 2217:
case 974:
case 2218:
case 4035:
case 4095:
case 2949:
case 3093:
case 1813:
case 3475:
case 1906:
case 1414:
case 570:
case 693:
case 319:
case 3794:
case 1961:
case 1699:
case 1774:
case 3253:
case 2203:
case 688:
case 3354:
case 814:
case 3612:
case 1752:
case 3319:
case 313:
case 2611:
case 4014:
case 2371:
case 3372:
case 850:
case 2189:
case 2501:
case 1633:
case 926:
case 4053:
case 3259:
case 3214:
case 3673:
case 3313:
case 1275:
case 242:
case 889:
case 2981:
case 3308:
case 2358:
case 3982:
case 2357:
case 3235:
case 1079:
case 415:
case 3930:
case 898:
case 2891:
case 1246:
case 384:
case 3295:
case 883:
case 2943:
case 2786:
case 1819:
case 3583:
case 192:
case 4043:
case 3249:
case 3076:
case 1481:
case 3045:
case 1096:
case 3917:
case 3816:
case 548:
case 2725:
case 987:
case 3228:
case 1844:
case 2953:
case 1865:
case 3621:
case 2348:
case 1262:
case 2347:
case 85:
case 1256:
case 3763:
case 686:
case 2872:
case 402:
case 1786:
case 2819:
case 598:
case 3417:
case 1831:
case 3804:
case 3418:
case 2854:
case 1797:
case 1738:
case 1737:
case 2079:
case 2246:
case 736:
case 2012:
case 3011:
case 142:
case 2275:
case 1358:
case 1981:
case 206:
case 1209:
case 3125:
case 2453:
case 2693:
case 3534:
case 1501:
case 3110:
case 1574:
case 1566:
case 1189:
case 3640:
case 3206:
case 3261:
case 627:
case 1178:
case 3186:
case 2865:
case 55:
case 3198:
case 1542:
case 2087:
case 1684:
case 2443:
case 1725:
case 3789:
case 2096:
case 1710:
case 2600:
case 3490:
case 3823:
case 221:
case 292:
case 3667:
case 3482:
case 2481:
case 159:
case 2156:
case 3106:
case 3238:
case 2013:
case 3305:
case 1277:
case 188:
case 1026:
case 193:
case 784:
case 3297:
case 3298:
case 59:
case 3060:
case 840:
case 2466:
case 567:
case 3969:
case 2692:
case 995:
case 2401:
case 2452:
case 3058:
case 3057:
case 2007:
case 2632:
case 2680:
case 1671:
case 1966:
case 1868:
case 1974:
case 2376:
case 3994:
case 2364:
case 590:
case 2146:
case 84:
case 2263:
case 3884:
case 635:
case 4:
case 2345:
case 1761:
case 3483:
case 360:
case 265:
case 1581:
case 882:
case 249:
case 3048:
case 2821:
case 2727:
case 3225:
case 2728:
case 1085:
case 3441:
case 3029:
case 243:
case 2442:
case 3210:
case 3915:
case 1289:
case 3312:
case 4066:
case 1680:
case 2311:
case 4074:
case 3149:
case 2671:
case 3672:
case 1007:
case 3494:
case 4001:
case 1008:
case 831:
case 1632:
case 3654:
case 111:
case 540:
case 3434:
case 2942:
case 3941:
case 3415:
case 1873:
case 3420:
case 3517:
case 3833:
case 1355:
case 3893:
case 2278:
case 2840:
case 757:
case 1442:
case 143:
case 2289:
case 2543:
case 1727:
case 347:
case 858:
case 1821:
case 3530:
case 916:
case 1749:
case 3159:
case 2109:
case 3644:
case 403:
case 3582:
case 4042:
case 1175:
case 963:
case 1376:
case 876:
case 2706:
case 1616:
case 3800:
case 945:
case 3469:
case 2952:
case 969:
case 3388:
case 2868:
case 2966:
case 2867:
case 3396:
case 3912:
case 645:
case 457:
case 1723:
case 1030:
case 3979:
case 669:
case 2464:
case 566:
case 1082:
case 2548:
case 2221:
case 11:
case 1661:
case 1999:
case 2529:
case 3825:
case 1606:
case 2716:
case 1889:
case 663:
case 703:
case 1267:
case 2172:
case 616:
case 3171:
case 725:
case 370:
case 1131:
case 1955:
case 1191:
case 1024:
case 2628:
case 396:
case 1003:
case 2635:
case 2560:
case 3123:
case 644:
case 2695:
case 3507:
case 2557:
case 3508:
case 3837:
case 1945:
case 3791:
case 1878:
case 2165:
case 2780:
case 2273:
case 274:
case 541:
case 1704:
case 1017:
case 1018:
case 3897:
case 1627:
case 139:
case 1628:
case 3200:
case 2250:
case 1863:
case 3905:
case 3192:
case 694:
case 337:
case 314:
case 2131:
case 361:
case 2267:
case 1119:
case 813:
case 1342:
case 53:
case 1716:
case 3656:
case 2889:
case 2090:
case 2606:
case 3496:
case 2999:
case 3043:
case 3369:
case 3662:
case 2661:
case 935:
case 3488:
case 1529:
case 1476:
case 1547:
case 21:
case 1221:
case 1911:
case 1445:
case 210:
case 1732:
case 315:
case 1614:
case 3754:
case 1144:
case 2018:
case 1374:
case 2017:
case 3772:
case 2771:
case 1780:
case 1352:
case 1659:
case 3719:
case 2877:
case 228:
case 778:
case 530:
case 1439:
case 841:
case 695:
case 3479:
case 1792:
case 346:
case 1557:
case 1695:
case 756:
case 1560:
case 3675:
case 917:
case 3053:
case 2003:
case 934:
case 3315:
case 325:
case 220:
case 1069:
case 3133:
case 1960:
case 1265:
case 2625:
case 796:
case 2370:
case 1957:
case 1700:
case 1958:
case 655:
case 2722:
case 3849:
case 2545:
case 2447:
case 2448:
case 2083:
case 471:
case 3663:
case 2429:
case 804:
case 3827:
case 3926:
case 1793:
case 662:
case 702:
case 1875:
case 829:
case 2291:
case 1947:
case 1846:
case 1353:
case 2231:
case 324:
case 1254:
case 1929:
case 2167:
case 3985:
case 2168:
case 551:
case 823:
case 2002:
case 2051:
case 2638:
case 3066:
case 805:
case 2460:
case 3505:
case 77:
case 654:
case 1121:
case 2698:
case 2457:
case 3407:
case 1094:
case 3408:
case 3814:
case 1429:
case 4047:
case 281:
case 1083:
case 504:
case 1722:
case 3913:
case 1370:
case 2381:
case 3750:
case 3806:
case 3689:
case 3382:
case 3907:
case 1625:
case 1784:
case 2862:
case 3767:
case 3:
case 3390:
case 3768:
case 2244:
case 120:
case 601:
case 761:
case 132:
case 1697:
case 1698:
case 1458:
case 2094:
case 1457:
case 4060:
case 90:
case 3122:
case 3317:
case 3677:
case 1051:
case 1002:
case 1168:
case 3426:
case 1167:
case 2272:
case 3271:
case 3303:
case 2353:
case 715:
case 529:
case 2254:
case 3740:
case 2948:
case 2846:
case 2947:
case 1539:
case 523:
case 851:
case 2511:
case 497:
case 3512:
case 2793:
case 46:
case 2875:
case 3579:
case 378:
case 3184:
case 1077:
case 2739:
case 4071:
case 2674:
case 382:
case 2213:
case 2666:
case 2923:
case 3491:
case 4004:
case 2652:
case 2359:
case 3309:
case 3602:
case 993:
case 1916:
case 3098:
case 244:
case 1817:
case 2432:
case 3573:
case 1226:
case 2480:
case 3086:
case 438:
case 2196:
case 2188:
case 2187:
case 1803:
case 3965:
case 674:
case 2136:
case 2208:
case 245:
case 340:
case 3683:
case 2328:
case 269:
case 2327:
case 750:
case 1824:
case 1500:
case 2349:
case 3641:
case 2584:
case 3870:
case 216:
case 1361:
case 789:
case 2745:
case 3247:
case 1105:
case 2522:
case 536:
case 1089:
case 897:
case 783:
case 86:
case 2416:
case 2904:
case 3954:
case 1285:
case 1980:
case 3972:
case 1208:
case 964:
case 3615:
case 376:
case 3346:
case 628:
case 3853:
case 1395:
case 1187:
case 390:
case 1196:
case 3472:
case 3694:
case 2404:
case 3454:
case 1432:
case 2817:
case 144:
case 3779:
case 404:
case 952:
case 1923:
case 1601:
case 2593:
case 1359:
case 3634:
case 2077:
case 1739:
case 1666:
case 3540:
case 1674:
case 2285:
case 3787:
case 1971:
case 2932:
case 1904:
case 294:
case 3669:
case 3362:
case 1745:
case 3991:
case 423:
case 3736:
case 949:
case 56:
case 2306:
case 1764:
case 116:
case 1063:
case 1349:
case 1584:
case 1179:
case 2500:
case 39:
case 331:
case 3199:
case 3444:
case 169:
case 2760:
case 3968:
case 3866:
case 2185:
case 262:
case 885:
case 1834:
case 3801:
case 419:
case 2757:
case 2900:
case 2758:
case 3950:
case 3708:
case 1894:
case 3014:
case 2009:
case 906:
case 2338:
case 126:
case 2337:
case 1984:
case 74:
case 1212:
case 557:
case 1653:
case 3713:
case 1493:
case 466:
case 3239:
case 1075:
case 1433:
case 254:
case 62:
case 2532:
case 2580:
case 620:
case 101:
case 921:
case 2747:
case 3245:
case 2883:
case 3264:
case 398:
case 992:
case 477:
case 2993:
case 2422:
case 3028:
case 618:
case 1287:
case 2516:
case 187:
case 3842:
case 2841:
case 383:
case 350:
case 2670:
case 255:
case 1681:
case 2310:
case 740:
case 2325:
case 4000:
case 1400:
case 1056:
case 1113:
case 2484:
case 1062:
case 1643:
case 3519:
case 2815:
case 43:
case 857:
case 422:
case 3726:
case 154:
case 942:
case 3603:
case 348:
case 2075:
case 3921:
case 3211:
case 2279:
case 3440:
case 98:
case 1337:
case 1338:
case 3147:
case 1758:
case 3618:
case 1900:
case 1757:
case 3378:
case 1386:
case 3129:
case 162:
case 1397:
case 2062:
case 607:
case 2643:
case 1484:
case 2400:
case 3006:
case 1325:
case 3630:
case 2869:
case 3544:
case 4084:
case 1729:
case 2296:
case 953:
case 3160:
case 3624:
case 1516:
case 1422:
case 959:
case 201:
case 584:
case 3157:
case 1969:
case 2503:
case 1451:
case 1402:
case 2128:
case 1709:
case 2312:
case 2379:
case 94:
case 1058:
case 569:
case 1631:
case 1305:
case 2893:
case 982:
case 3278:
case 388:
case 3840:
case 1237:
case 236:
case 393:
case 619:
case 2415:
case 2518:
case 1286:
case 2517:
case 2833:
case 16:
case 2530:
case 792:
case 3109:
case 2665:
case 2159:
case 2644:
case 160:
case 2114:
case 271:
case 721:
case 3581:
case 1048:
case 4041:
case 2582:
case 1047:
case 1915:
case 1225:
case 247:
case 1920:
case 3085:
case 2469:
case 3623:
case 940:
case 3901:
case 2388:
case 3952:
case 2902:
case 3867:
case 2396:
case 2336:
case 2762:
case 420:
case 2135:
case 2524:
case 3706:
case 1518:
case 1833:
case 2297:
case 1415:
case 1746:
case 958:
case 2106:
case 352:
case 1983:
case 2238:
case 816:
case 3355:
case 2161:
case 3007:
case 3008:
case 4034:
case 364:
case 3714:
case 1312:
case 1619:
case 2709:
case 3680:
case 976:
case 1379:
case 1672:
case 845:
case 2060:
case 3474:
case 869:
case 3466:
case 1128:
case 1503:
case 3692:
case 1434:
case 691:
case 3452:
case 2402:
case 63:
case 2451:
case 4094:
case 1135:
case 2994:
case 3376:
case 4069:
case 3616:
case 2884:
case 967:
case 1336:
case 3345:
case 1762:
case 1387:
case 1902:
case 1388:
case 1951:
case 780:
case 753:
case 3727:
case 844:
case 343:
case 260:
case 2047:
case 1582:
case 349:
case 2048:
case 759:
case 1665:
case 474:
case 1930:
case 2011:
case 3012:
case 1039:
case 3275:
case 2777:
case 2778:
case 801:
case 1982:
case 2871:
case 1099:
case 1832:
case 2418:
case 638:
case 2520:
case 2417:
case 1295:
case 1990:
case 2403:
case 1551:
case 2534:
case 1502:
case 3693:
case 1313:
case 3633:
case 2186:
case 2569:
case 1903:
case 950:
case 439:
case 3256:
case 2206:
case 1763:
case 433:
case 2430:
case 1045:
case 3036:
case 554:
case 2667:
case 3481:
case 1064:
case 1541:
case 1227:
case 1228:
case 1918:
case 3600:
case 257:
case 1917:
case 1816:
case 983:
case 2490:
case 38:
case 1594:
case 3209:
case 4003:
case 604:
case 2055:
case 2313:
case 764:
case 855:
case 1110:
case 3566:
case 1125:
case 2502:
case 1534:
case 2551:
case 1520:
case 1417:
case 1804:
case 1418:
case 3798:
case 2990:
case 2295:
case 3797:
case 3943:
case 948:
case 587:
case 2039:
case 2982:
case 2307:
case 3981:
case 2308:
case 752:
case 2235:
case 4018:
case 3891:
case 1011:
case 2892:
case 1789:
case 743:
case 157:
case 3710:
case 2918:
case 1490:
case 854:
case 3542:
case 2228:
case 3684:
case 3725:
case 3470:
case 1667:
case 2064:
case 359:
case 2076:
case 4090:
case 605:
case 749:
case 1424:
case 1206:
case 1137:
case 1138:
case 1385:
case 1198:
case 380:
case 526:
case 2903:
case 3953:
case 1569:
case 4024:
case 3622:
case 3067:
case 3068:
case 2636:
case 2456:
case 2696:
case 2000:
case 647:
case 996:
case 3224:
case 3959:
case 2687:
case 574:
case 1848:
case 241:
case 1847:
case 1975:
case 1022:
case 2281:
case 3282:
case 130:
case 727:
case 277:
case 3885:
case 2589:
case 3995:
case 2152:
case 3290:
case 3040:
case 81:
case 2475:
case 3949:
case 454:
case 3826:
case 3928:
case 3218:
case 2715:
case 3203:
case 2253:
case 3304:
case 1751:
case 3141:
case 2612:
case 2734:
case 2319:
case 2679:
case 636:
case 2372:
case 3371:
case 1857:
case 3183:
case 1956:
case 2794:
case 1962:
case 1391:
case 462:
case 1101:
case 3134:
case 1152:
case 2741:
case 874:
case 230:
case 1344:
case 1589:
case 1174:
case 3427:
case 177:
case 3021:
case 3449:
case 2975:
case 1281:
case 510:
case 2946:
case 2848:
case 1462:
case 1909:
case 1687:
case 2563:
case 1456:
case 937:
case 1636:
case 961:
case 4056:
case 914:
case 3676:
case 4062:
case 3961:
case 3699:
case 3392:
case 66:
case 946:
case 3807:
case 2857:
case 3906:
case 2858:
case 1794:
case 3752:
case 1734:
case 1319:
case 2751:
case 3701:
case 833:
case 1372:
case 2860:
case 426:
case 875:
case 3332:
case 1354:
case 3586:
case 1715:
case 3169:
case 3655:
case 2605:
case 4046:
case 3495:
case 3598:
case 51:
case 3597:
case 1720:
case 166:
case 1475:
case 772:
case 3537:
case 1446:
case 1578:
case 291:
case 1977:
case 1864:
case 251:
case 1845:
case 3836:
case 3938:
case 2023:
case 2730:
case 2367:
case 2368:
case 1016:
case 903:
case 327:
case 3743:
case 3888:
case 3887:
case 1153:
case 3986:
case 416:
case 3269:
case 463:
case 925:
case 3044:
case 105:
case 532:
case 2556:
case 2562:
case 3561:
case 469:
case 3333:
case 3234:
case 1266:
case 3753:
case 1143:
case 518:
case 1181:
case 520:
case 2963:
case 1509:
case 3393:
case 1839:
case 881:
case 2477:
case 708:
case 2575:
case 3812:
case 2004:
case 1608:
case 1989:
case 1607:
case 2717:
case 2071:
case 1080:
case 3019:
case 82:
case 2321:
case 3322:
case 832:
case 3117:
case 300:
case 735:
case 1790:
case 1368:
case 2016:
case 2242:
case 1367:
case 1489:
case 3410:
case 779:
case 4089:
case 3384:
case 1782:
case 2864:
case 2977:
case 2876:
case 1071:
case 3486:
case 3595:
case 2080:
case 3497:
case 1004:
case 2032:
case 2989:
case 2607:
case 1718:
case 2608:
case 1811:
case 507:
case 3535:
case 1478:
case 1546:
case 138:
case 684:
case 495:
case 818:
case 3805:
case 2509:
case 3559:
case 2855:
case 1963:
case 1626:
case 3514:
case 1170:
case 3182:
case 2143:
case 2274:
case 2613:
case 2266:
case 1703:
case 3202:
case 3251:
case 3190:
case 2201:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756893601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,];
var gg_b = "1756893601/";

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
