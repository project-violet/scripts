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
case 1838:
case 2730:
case 1284:
case 3391:
case 3409:
case 2993:
case 3078:
case 1990:
case 1039:
case 3112:
case 3909:
case 1218:
case 1247:
case 1650:
case 2287:
case 2138:
case 2131:
case 3259:
case 2402:
case 2405:
case 2571:
case 3801:
case 2000:
case 376:
case 382:
case 1863:
case 620:
case 185:
case 828:
case 2095:
case 1594:
case 1928:
case 1044:
case 3697:
case 4095:
case 2132:
case 1259:
case 1700:
case 1879:
case 3884:
case 3952:
case 586:
case 332:
case 772:
case 3882:
case 3653:
case 2601:
case 2080:
case 2434:
case 1620:
case 4029:
case 2790:
case 3622:
case 1876:
case 3270:
case 2218:
case 114:
case 2334:
case 2193:
case 944:
case 428:
case 2319:
case 2826:
case 3261:
case 1656:
case 928:
case 3854:
case 1585:
case 2217:
case 2277:
case 1080:
case 2235:
case 547:
case 2122:
case 2576:
case 1671:
case 638:
case 819:
case 1362:
case 3929:
case 1168:
case 2436:
case 2396:
case 3005:
case 2351:
case 2683:
case 326:
case 299:
case 1846:
case 2963:
case 893:
case 207:
case 538:
case 1683:
case 1858:
case 1737:
case 3772:
case 349:
case 3362:
case 3139:
case 3569:
case 2516:
case 3179:
case 3363:
case 3233:
case 3178:
case 2816:
case 2250:
case 955:
case 2255:
case 528:
case 1333:
case 3247:
case 2348:
case 4079:
case 4015:
case 3188:
case 611:
case 664:
case 3699:
case 2525:
case 1042:
case 1022:
case 1396:
case 1465:
case 582:
case 2975:
case 3213:
case 2679:
case 2944:
case 193:
case 646:
case 3333:
case 2855:
case 3737:
case 3161:
case 1907:
case 2908:
case 2664:
case 3548:
case 1208:
case 2911:
case 3412:
case 2535:
case 451:
case 2337:
case 1125:
case 3487:
case 1381:
case 2457:
case 1791:
case 4083:
case 3769:
case 1563:
case 919:
case 2289:
case 3044:
case 3245:
case 365:
case 1149:
case 1374:
case 245:
case 2317:
case 2949:
case 2709:
case 2237:
case 2085:
case 2072:
case 3049:
case 3776:
case 3256:
case 3115:
case 2083:
case 1066:
case 1128:
case 1184:
case 3490:
case 56:
case 1427:
case 1738:
case 2475:
case 2230:
case 3220:
case 3650:
case 2884:
case 2501:
case 1786:
case 403:
case 3814:
case 3499:
case 678:
case 2764:
case 293:
case 2144:
case 3304:
case 345:
case 1473:
case 2195:
case 2559:
case 3007:
case 1504:
case 3513:
case 903:
case 2174:
case 1898:
case 1361:
case 2038:
case 459:
case 342:
case 50:
case 3519:
case 37:
case 3774:
case 4064:
case 508:
case 2537:
case 2440:
case 1994:
case 1287:
case 4047:
case 1757:
case 2234:
case 2167:
case 3858:
case 1399:
case 1675:
case 2644:
case 3339:
case 2074:
case 2622:
case 389:
case 519:
case 2657:
case 145:
case 1261:
case 2029:
case 1816:
case 3028:
case 2199:
case 2757:
case 2030:
case 3719:
case 260:
case 2836:
case 832:
case 674:
case 2352:
case 1272:
case 1487:
case 3406:
case 3692:
case 2727:
case 1338:
case 1936:
case 1893:
case 2419:
case 2754:
case 2548:
case 2569:
case 3522:
case 1569:
case 2225:
case 1016:
case 3327:
case 2930:
case 1505:
case 213:
case 1321:
case 3750:
case 719:
case 863:
case 2486:
case 3976:
case 1043:
case 2297:
case 435:
case 2178:
case 2002:
case 1001:
case 3886:
case 2528:
case 4:
case 1303:
case 1219:
case 228:
case 1584:
case 3422:
case 938:
case 2073:
case 3479:
case 3911:
case 1047:
case 3780:
case 2642:
case 3635:
case 2690:
case 2619:
case 3451:
case 866:
case 2781:
case 1509:
case 3896:
case 1019:
case 1774:
case 810:
case 3163:
case 3975:
case 1271:
case 1534:
case 115:
case 1555:
case 129:
case 221:
case 2443:
case 3483:
case 3963:
case 2718:
case 2050:
case 898:
case 2767:
case 906:
case 684:
case 2550:
case 447:
case 290:
case 926:
case 1174:
case 28:
case 683:
case 959:
case 1378:
case 2285:
case 3644:
case 62:
case 1189:
case 1962:
case 2746:
case 557:
case 1844:
case 806:
case 3199:
case 2905:
case 3530:
case 817:
case 2533:
case 635:
case 381:
case 3983:
case 3236:
case 2160:
case 343:
case 1707:
case 2846:
case 2626:
case 2844:
case 813:
case 571:
case 1885:
case 395:
case 82:
case 3498:
case 3585:
case 3544:
case 659:
case 1402:
case 3957:
case 3043:
case 1814:
case 1244:
case 2810:
case 694:
case 3389:
case 2652:
case 2143:
case 1978:
case 1391:
case 2809:
case 7:
case 140:
case 805:
case 1498:
case 1586:
case 2566:
case 3564:
case 453:
case 3687:
case 3210:
case 2363:
case 1629:
case 2298:
case 2008:
case 645:
case 3102:
case 2771:
case 2526:
case 1395:
case 1313:
case 492:
case 2272:
case 3937:
case 2228:
case 2868:
case 1604:
case 2527:
case 3557:
case 1567:
case 2738:
case 715:
case 896:
case 373:
case 1258:
case 3066:
case 2620:
case 305:
case 1953:
case 417:
case 2540:
case 3573:
case 2989:
case 788:
case 3779:
case 3813:
case 80:
case 465:
case 3816:
case 1510:
case 745:
case 2149:
case 3874:
case 1952:
case 2051:
case 334:
case 821:
case 223:
case 981:
case 2044:
case 1754:
case 1855:
case 251:
case 1161:
case 1307:
case 4074:
case 731:
case 3323:
case 151:
case 1050:
case 644:
case 2643:
case 1074:
case 1160:
case 1740:
case 3663:
case 1390:
case 3685:
case 2532:
case 3880:
case 827:
case 3014:
case 1134:
case 628:
case 3645:
case 3997:
case 1495:
case 1636:
case 2116:
case 3707:
case 3992:
case 494:
case 2776:
case 2531:
case 602:
case 1833:
case 910:
case 3666:
case 1275:
case 64:
case 3568:
case 1761:
case 1834:
case 521:
case 1951:
case 4017:
case 2789:
case 3100:
case 3425:
case 2815:
case 211:
case 820:
case 2840:
case 434:
case 1025:
case 3580:
case 3438:
case 2032:
case 110:
case 3658:
case 1229:
case 183:
case 967:
case 1049:
case 1826:
case 553:
case 1720:
case 3528:
case 3050:
case 3532:
case 972:
case 172:
case 1102:
case 2861:
case 1933:
case 476:
case 4082:
case 2870:
case 1255:
case 2035:
case 291:
case 3085:
case 2936:
case 3326:
case 676:
case 2794:
case 39:
case 2399:
case 2221:
case 3850:
case 1652:
case 2340:
case 1734:
case 641:
case 1368:
case 2758:
case 1306:
case 978:
case 2800:
case 988:
case 3190:
case 2380:
case 38:
case 799:
case 483:
case 1412:
case 1137:
case 3521:
case 386:
case 549:
case 3234:
case 2497:
case 3073:
case 2331:
case 3943:
case 3951:
case 2578:
case 2793:
case 2760:
case 3185:
case 2670:
case 3838:
case 1077:
case 4032:
case 1503:
case 1559:
case 3765:
case 3105:
case 1699:
case 3864:
case 3022:
case 511:
case 774:
case 2697:
case 1808:
case 164:
case 3265:
case 775:
case 3428:
case 578:
case 2335:
case 2159:
case 1045:
case 1000:
case 2983:
case 1593:
case 263:
case 2180:
case 2713:
case 3778:
case 3633:
case 2194:
case 2207:
case 1308:
case 408:
case 2447:
case 2588:
case 2881:
case 1831:
case 3023:
case 2089:
case 1014:
case 208:
case 1923:
case 2952:
case 2859:
case 3677:
case 1690:
case 2617:
case 273:
case 1869:
case 3940:
case 3702:
case 103:
case 1263:
case 1486:
case 1769:
case 1543:
case 2153:
case 3518:
case 346:
case 904:
case 2599:
case 2586:
case 1418:
case 1336:
case 288:
case 1747:
case 1123:
case 2066:
case 471:
case 3843:
case 194:
case 1815:
case 726:
case 686:
case 4004:
case 317:
case 1264:
case 4035:
case 2481:
case 1598:
case 2970:
case 3870:
case 2807:
case 2336:
case 2731:
case 152:
case 567:
case 3238:
case 1281:
case 2239:
case 1408:
case 2759:
case 2493:
case 2901:
case 107:
case 3071:
case 1296:
case 3414:
case 2621:
case 1071:
case 767:
case 2282:
case 3764:
case 3942:
case 962:
case 2302:
case 1293:
case 3531:
case 3749:
case 276:
case 3714:
case 1266:
case 3431:
case 2395:
case 1101:
case 2874:
case 4012:
case 2474:
case 2010:
case 3803:
case 3215:
case 2198:
case 701:
case 1315:
case 1377:
case 1725:
case 1238:
case 3030:
case 394:
case 740:
case 2339:
case 3476:
case 2799:
case 1857:
case 3583:
case 1644:
case 188:
case 3278:
case 2960:
case 3831:
case 1375:
case 3978:
case 255:
case 1011:
case 1322:
case 3862:
case 2997:
case 1914:
case 329:
case 4031:
case 33:
case 523:
case 1436:
case 2426:
case 117:
case 3907:
case 2001:
case 2435:
case 3818:
case 1108:
case 3084:
case 3552:
case 855:
case 1522:
case 1915:
case 1997:
case 495:
case 3855:
case 3104:
case 3280:
case 2903:
case 894:
case 596:
case 1891:
case 3306:
case 2766:
case 857:
case 2343:
case 336:
case 232:
case 3347:
case 2232:
case 3743:
case 3308:
case 640:
case 804:
case 3642:
case 3156:
case 704:
case 2120:
case 171:
case 705:
case 302:
case 271:
case 800:
case 976:
case 458:
case 3070:
case 3118:
case 1323:
case 943:
case 1596:
case 2805:
case 387:
case 3527:
case 292:
case 12:
case 1210:
case 1985:
case 2350:
case 3460:
case 846:
case 3757:
case 3021:
case 18:
case 3364:
case 3767:
case 3249:
case 2189:
case 1970:
case 3121:
case 2710:
case 2126:
case 2849:
case 1950:
case 407:
case 3577:
case 1608:
case 2918:
case 3034:
case 1231:
case 1472:
case 2280:
case 1165:
case 1340:
case 14:
case 814:
case 1195:
case 562:
case 3751:
case 3871:
case 1829:
case 613:
case 695:
case 3928:
case 1098:
case 2046:
case 905:
case 448:
case 1796:
case 1756:
case 90:
case 1810:
case 3379:
case 2775:
case 996:
case 2442:
case 3285:
case 2373:
case 960:
case 4019:
case 615:
case 3718:
case 3732:
case 1471:
case 357:
case 2458:
case 2372:
case 1539:
case 472:
case 4008:
case 651:
case 1492:
case 493:
case 2956:
case 907:
case 1289:
case 1501:
case 3315:
case 1091:
case 3336:
case 1463:
case 801:
case 231:
case 2117:
case 2064:
case 2942:
case 1695:
case 415:
case 886:
case 2982:
case 3596:
case 168:
case 2972:
case 206:
case 998:
case 2270:
case 467:
case 258:
case 1468:
case 1211:
case 3320:
case 1777:
case 1613:
case 642:
case 3400:
case 3142:
case 3317:
case 3059:
case 1246:
case 703:
case 3191:
case 1552:
case 2580:
case 1166:
case 3606:
case 3170:
case 3567:
case 934:
case 2513:
case 3624:
case 1302:
case 2843:
case 308:
case 3286:
case 930:
case 888:
case 3341:
case 1233:
case 3300:
case 1241:
case 1214:
case 325:
case 2671:
case 1788:
case 1566:
case 1215:
case 3811:
case 367:
case 1972:
case 319:
case 2364:
case 1964:
case 3885:
case 2245:
case 708:
case 3889:
case 1092:
case 468:
case 3967:
case 3887:
case 1687:
case 2145:
case 764:
case 3171:
case 710:
case 17:
case 3832:
case 609:
case 427:
case 3974:
case 1452:
case 1562:
case 3797:
case 3729:
case 3074:
case 665:
case 1448:
case 2635:
case 2711:
case 2210:
case 3496:
case 840:
case 2788:
case 340:
case 3158:
case 1024:
case 3897:
case 3369:
case 1758:
case 574:
case 1256:
case 92:
case 3402:
case 849:
case 91:
case 1176:
case 40:
case 61:
case 691:
case 2146:
case 936:
case 1411:
case 3016:
case 1456:
case 942:
case 809:
case 712:
case 2063:
case 3254:
case 2133:
case 3936:
case 3597:
case 583:
case 563:
case 3355:
case 3760:
case 2393:
case 878:
case 1624:
case 985:
case 2935:
case 445:
case 3371:
case 2608:
case 1925:
case 2736:
case 3875:
case 2057:
case 2802:
case 1392:
case 869:
case 3408:
case 1232:
case 3806:
case 1222:
case 3322:
case 2872:
case 2040:
case 1203:
case 2572:
case 2957:
case 418:
case 3390:
case 983:
case 3717:
case 826:
case 3244:
case 5:
case 4001:
case 3722:
case 2669:
case 2662:
case 2563:
case 1146:
case 573:
case 1890:
case 1297:
case 3706:
case 3334:
case 296:
case 787:
case 1136:
case 1462:
case 3372:
case 3193:
case 2928:
case 2984:
case 1764:
case 3504:
case 2640:
case 505:
case 2575:
case 3968:
case 798:
case 3076:
case 460:
case 808:
case 3160:
case 3723:
case 3430:
case 3579:
case 3649:
case 391:
case 3348:
case 2806:
case 1685:
case 529:
case 2556:
case 1132:
case 3524:
case 3232:
case 2024:
case 1157:
case 2883:
case 2136:
case 3925:
case 3684:
case 1444:
case 3581:
case 3177:
case 1382:
case 57:
case 1490:
case 2309:
case 137:
case 1877:
case 3601:
case 2429:
case 1852:
case 1745:
case 1316:
case 3592:
case 1480:
case 3744:
case 2919:
case 2173:
case 961:
case 1767:
case 1884:
case 123:
case 992:
case 3738:
case 1119:
case 1780:
case 1681:
case 2692:
case 2212:
case 1931:
case 3634:
case 2384:
case 502:
case 3950:
case 3462:
case 1903:
case 1326:
case 524:
case 1499:
case 1971:
case 1403:
case 233:
case 811:
case 1062:
case 1205:
case 950:
case 3132:
case 3756:
case 3961:
case 964:
case 3883:
case 3613:
case 2049:
case 838:
case 3906:
case 2431:
case 1460:
case 1082:
case 1075:
case 890:
case 2370:
case 4056:
case 297:
case 752:
case 977:
case 1980:
case 2264:
case 24:
case 3324:
case 1823:
case 1514:
case 3006:
case 2389:
case 2722:
case 1616:
case 2616:
case 2450:
case 1911:
case 2712:
case 3881:
case 1992:
case 2638:
case 2641:
case 2096:
case 2034:
case 912:
case 1267:
case 269:
case 2704:
case 643:
case 1209:
case 2647:
case 132:
case 1896:
case 980:
case 2865:
case 517:
case 1523:
case 1670:
case 975:
case 1114:
case 3704:
case 1956:
case 3560:
case 2387:
case 214:
case 1589:
case 413:
case 2887:
case 1842:
case 4062:
case 3474:
case 2858:
case 850:
case 2333:
case 1113:
case 542:
case 87:
case 3639:
case 2368:
case 709:
case 1662:
case 830:
case 1722:
case 1705:
case 3448:
case 3064:
case 3248:
case 192:
case 4036:
case 3800:
case 99:
case 289:
case 2574:
case 3349:
case 3186:
case 593:
case 3141:
case 2933:
case 1151:
case 2700:
case 1765:
case 3996:
case 688:
case 2248:
case 2824:
case 2625:
case 1692:
case 856:
case 3526:
case 2682:
case 466:
case 2980:
case 647:
case 1721:
case 3574:
case 873:
case 1245:
case 2929:
case 2290:
case 473:
case 3223:
case 1845:
case 1489:
case 580:
case 144:
case 1135:
case 2646:
case 1639:
case 1250:
case 3628:
case 687:
case 3168:
case 1580:
case 2653:
case 725:
case 2448:
case 3612:
case 3602:
case 3715:
case 3656:
case 59:
case 527:
case 2817:
case 4091:
case 2863:
case 3837:
case 891:
case 85:
case 1015:
case 438:
case 2283:
case 2645:
case 2452:
case 2071:
case 3134:
case 2489:
case 487:
case 182:
case 3281:
case 2570:
case 2509:
case 1697:
case 1519:
case 3503:
case 851:
case 2624:
case 3429:
case 860:
case 3626:
case 2864:
case 616:
case 3659:
case 1726:
case 1601:
case 974:
case 436:
case 2778:
case 1955:
case 2441:
case 3000:
case 3668:
case 4067:
case 3959:
case 1449:
case 3545:
case 1797:
case 1969:
case 3869:
case 76:
case 3307:
case 537:
case 1901:
case 971:
case 2461:
case 2517:
case 3646:
case 1507:
case 315:
case 89:
case 186:
case 1344:
case 1282:
case 515:
case 3224:
case 2433:
case 3169:
case 2581:
case 1677:
case 2978:
case 3133:
case 2163:
case 497:
case 1942:
case 246:
case 1924:
case 2596:
case 2551:
case 307:
case 1730:
case 1965:
case 1347:
case 3727:
case 3739:
case 770:
case 2706:
case 3149:
case 1866:
case 1926:
case 1775:
case 1298:
case 1147:
case 262:
case 3150:
case 1405:
case 2554:
case 2094:
case 3938:
case 3899:
case 3701:
case 1010:
case 3674:
case 2022:
case 1065:
case 3051:
case 3848:
case 845:
case 835:
case 2798:
case 98:
case 2568:
case 3710:
case 3863:
case 1496:
case 2090:
case 3395:
case 3012:
case 298:
case 3493:
case 2678:
case 2454:
case 3789:
case 1825:
case 1748:
case 658:
case 2011:
case 3360:
case 1031:
case 1061:
case 217:
case 2041:
case 1750:
case 2292:
case 1006:
case 2421:
case 2632:
case 170:
case 929:
case 281:
case 32:
case 3318:
case 2413:
case 3209:
case 95:
case 3052:
case 778:
case 3054:
case 1388:
case 3387:
case 3019:
case 2852:
case 1600:
case 2084:
case 2914:
case 3698:
case 1440:
case 2877:
case 2114:
case 723:
case 3045:
case 2951:
case 595:
case 911:
case 2097:
case 1870:
case 3655:
case 3807:
case 3721:
case 2496:
case 6:
case 2060:
case 1343:
case 143:
case 2634:
case 862:
case 2026:
case 1139:
case 1558:
case 3383:
case 2965:
case 229:
case 1429:
case 3255:
case 2192:
case 3823:
case 4020:
case 2686:
case 2137:
case 3648:
case 1162:
case 2310:
case 4068:
case 3605:
case 280:
case 3258:
case 3128:
case 1602:
case 966:
case 1017:
case 2584:
case 1021:
case 2609:
case 2558:
case 3673:
case 753:
case 2318:
case 204:
case 1253:
case 1618:
case 162:
case 1051:
case 1577:
case 2924:
case 2639:
case 1355:
case 1133:
case 1929:
case 544:
case 348:
case 1900:
case 3678:
case 347:
case 2725:
case 2615:
case 3683:
case 2423:
case 2197:
case 1078:
case 1430:
case 1180:
case 2238:
case 991:
case 2747:
case 1012:
case 2119:
case 3734:
case 2515:
case 3902:
case 4059:
case 1148:
case 652:
case 2329:
case 2186:
case 3384:
case 3746:
case 1784:
case 1:
case 575:
case 1801:
case 3252:
case 97:
case 1633:
case 4038:
case 1371:
case 1813:
case 3146:
case 2522:
case 1076:
case 1588:
case 1491:
case 2394:
case 3154:
case 294:
case 2763:
case 2932:
case 1352:
case 546:
case 450:
case 3437:
case 120:
case 430:
case 2295:
case 133:
case 2157:
case 727:
case 1751:
case 3555:
case 3654:
case 945:
case 2795:
case 1557:
case 3004:
case 363:
case 3680:
case 352:
case 512:
case 880:
case 201:
case 982:
case 3079:
case 100:
case 3856:
case 1153:
case 1694:
case 1560:
case 3040:
case 3475:
case 2593:
case 3250:
case 3785:
case 2803:
case 1291:
case 3980:
case 124:
case 3269:
case 555:
case 3868:
case 1723:
case 1981:
case 179:
case 3373:
case 581:
case 3536:
case 3392:
case 3350:
case 2056:
case 1528:
case 673:
case 1595:
case 1393:
case 388:
case 3335:
case 2693:
case 2345:
case 393:
case 463:
case 3212:
case 1789:
case 3196:
case 313:
case 2811:
case 714:
case 1959:
case 3356:
case 1583:
case 2969:
case 2181:
case 1674:
case 2937:
case 1127:
case 3781:
case 3827:
case 1417:
case 1332:
case 446:
case 739:
case 42:
case 1927:
case 3038:
case 3382:
case 3093:
case 2740:
case 148:
case 3761:
case 275:
case 3297:
case 187:
case 1540:
case 3541:
case 3080:
case 3463:
case 1379:
case 3817:
case 3433:
case 3471:
case 4034:
case 2216:
case 2521:
case 2420:
case 506:
case 3257:
case 2796:
case 1425:
case 1640:
case 3153:
case 1283:
case 3432:
case 2889:
case 1806:
case 2188:
case 3802:
case 439:
case 668:
case 837:
case 3366:
case 1446:
case 227:
case 3426:
case 411:
case 4026:
case 3836:
case 321:
case 3688:
case 177:
case 2477:
case 2028:
case 1365:
case 1984:
case 1485:
case 735:
case 653:
case 3561:
case 4071:
case 2862:
case 198:
case 3219:
case 2401:
case 2411:
case 4037:
case 2408:
case 1882:
case 1450:
case 2265:
case 1032:
case 3892:
case 1906:
case 1872:
case 3099:
case 3833:
case 1702:
case 2115:
case 3264:
case 3077:
case 2672:
case 1048:
case 3310:
case 2422:
case 2369:
case 2650:
case 1691:
case 2900:
case 2948:
case 758:
case 2999:
case 1288:
case 2560:
case 2170:
case 2854:
case 3878:
case 2243:
case 3741:
case 3069:
case 1037:
case 499:
case 3173:
case 3554:
case 552:
case 1660:
case 3623:
case 244:
case 3495:
case 452:
case 1875:
case 1383:
case 761:
case 2830:
case 2059:
case 3319:
case 4076:
case 3447:
case 3025:
case 3829:
case 2880:
case 35:
case 1582:
case 3090:
case 1350:
case 300:
case 4011:
case 1164:
case 1628:
case 1525:
case 113:
case 242:
case 3835:
case 3759:
case 1908:
case 3994:
case 965:
case 2307:
case 3610:
case 540:
case 2777:
case 952:
case 1886:
case 1783:
case 385:
case 504:
case 2079:
case 240:
case 2078:
case 2871:
case 1085:
case 535:
case 3276:
case 1638:
case 2720:
case 212:
case 252:
case 3808:
case 432:
case 1809:
case 1106:
case 3703:
case 3550:
case 3643:
case 2424:
case 868:
case 1512:
case 895:
case 1719:
case 1943:
case 3427:
case 3720:
case 947:
case 3098:
case 2484:
case 1447:
case 3465:
case 3082:
case 1202:
case 1615:
case 1199:
case 697:
case 2203:
case 3017:
case 2070:
case 995:
case 1086:
case 1548:
case 3189:
case 1497:
case 1454:
case 3860:
case 4018:
case 3039:
case 2308:
case 2585:
case 1145:
case 169:
case 1328:
case 1840:
case 1435:
case 2252:
case 3598:
case 2564:
case 1706:
case 1270:
case 3434:
case 125:
case 409:
case 1544:
case 2831:
case 1947:
case 2021:
case 738:
case 2715:
case 2974:
case 3145:
case 2087:
case 1359:
case 2253:
case 994:
case 1213:
case 3296:
case 3155:
case 3553:
case 1380:
case 2453:
case 1919:
case 3660:
case 3879:
case 2579:
case 216:
case 398:
case 1185:
case 637:
case 2499:
case 3898:
case 3031:
case 550:
case 627:
case 1727:
case 834:
case 2323:
case 875:
case 3282:
case 1591:
case 3407:
case 3615:
case 1753:
case 679:
case 1632:
case 2354:
case 3289:
case 1641:
case 2147:
case 2487:
case 958:
case 1335:
case 2006:
case 2723:
case 2463:
case 3421:
case 3726:
case 2751:
case 1848:
case 65:
case 569:
case 1227:
case 498:
case 3272:
case 437:
case 1346:
case 2377:
case 3494:
case 1561:
case 560:
case 2541:
case 2716:
case 285:
case 1341:
case 1484:
case 2045:
case 2685:
case 1935:
case 304:
case 2866:
case 1899:
case 1581:
case 3203:
case 3539:
case 1103:
case 2500:
case 3916:
case 3263:
case 2313:
case 1977:
case 3565:
case 3106:
case 1112:
case 729:
case 1524:
case 1183:
case 3325:
case 2902:
case 2488:
case 2023:
case 1887:
case 2546:
case 3500:
case 320:
case 2055:
case 3958:
case 1603:
case 1938:
case 2019:
case 1262:
case 1680:
case 3275:
case 1527:
case 3374:
case 3370:
case 2882:
case 2410:
case 654:
case 1865:
case 736:
case 2286:
case 1792:
case 1240:
case 1138:
case 15:
case 1701:
case 3486:
case 3011:
case 3218:
case 2602:
case 649:
case 2154:
case 3538:
case 2164:
case 1369:
case 58:
case 2366:
case 2853:
case 3302:
case 3618:
case 2985:
case 1389:
case 1413:
case 2266:
case 2077:
case 1173:
case 865:
case 2511:
case 3089:
case 3403:
case 1404:
case 1868:
case 266:
case 3578:
case 3566:
case 3057:
case 1309:
case 8:
case 1830:
case 1619:
case 3271:
case 1647:
case 4021:
case 3546:
case 3815:
case 2269:
case 1704:
case 265:
case 4013:
case 335:
case 3225:
case 879:
case 1832:
case 541:
case 902:
case 2968:
case 2052:
case 282:
case 1995:
case 3041:
case 2306:
case 184:
case 220:
case 1057:
case 330:
case 516:
case 474:
case 237:
case 1228:
case 1961:
case 3328:
case 1987:
case 3661:
case 2950:
case 339:
case 369:
case 1648:
case 1268:
case 1968:
case 3562:
case 353:
case 1976:
case 1140:
case 108:
case 1541:
case 1171:
case 161:
case 829:
case 327:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1686726001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,];
var gg_b = "1686726001/";

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
