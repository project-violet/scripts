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
case 308:
case 1221:
case 3201:
case 2054:
case 3779:
case 1245:
case 3452:
case 2839:
case 2824:
case 860:
case 3081:
case 2681:
case 1079:
case 3365:
case 3930:
case 1101:
case 2182:
case 3286:
case 1500:
case 1031:
case 3674:
case 3565:
case 1331:
case 2624:
case 149:
case 796:
case 719:
case 511:
case 3711:
case 907:
case 3177:
case 2217:
case 1095:
case 3521:
case 3902:
case 782:
case 3894:
case 1703:
case 3784:
case 1274:
case 2511:
case 2085:
case 2637:
case 3964:
case 1455:
case 2954:
case 1921:
case 75:
case 2033:
case 595:
case 2406:
case 230:
case 2952:
case 1165:
case 3586:
case 2489:
case 1829:
case 2626:
case 4036:
case 3308:
case 3482:
case 346:
case 846:
case 2532:
case 1287:
case 3543:
case 817:
case 2080:
case 1926:
case 2101:
case 705:
case 2700:
case 1759:
case 2419:
case 414:
case 834:
case 1899:
case 1979:
case 1153:
case 3646:
case 3750:
case 2691:
case 179:
case 1142:
case 1148:
case 2862:
case 3904:
case 3291:
case 187:
case 2678:
case 3436:
case 4065:
case 1803:
case 2556:
case 1607:
case 2507:
case 987:
case 1240:
case 288:
case 2038:
case 1160:
case 1343:
case 2508:
case 2148:
case 2739:
case 1374:
case 601:
case 847:
case 2855:
case 2880:
case 3890:
case 3917:
case 314:
case 311:
case 1352:
case 1295:
case 3566:
case 851:
case 729:
case 1227:
case 1032:
case 172:
case 1910:
case 1738:
case 923:
case 3003:
case 2084:
case 3433:
case 2561:
case 2037:
case 217:
case 2449:
case 361:
case 3998:
case 483:
case 3340:
case 1528:
case 2900:
case 2258:
case 3155:
case 1358:
case 3175:
case 1877:
case 3348:
case 2816:
case 2942:
case 3050:
case 2747:
case 2467:
case 2972:
case 1074:
case 2901:
case 1613:
case 1393:
case 1181:
case 2979:
case 380:
case 3209:
case 2698:
case 3790:
case 3189:
case 786:
case 2078:
case 3078:
case 2975:
case 1712:
case 724:
case 2067:
case 3085:
case 3208:
case 2386:
case 1349:
case 1872:
case 2762:
case 2267:
case 2174:
case 2899:
case 676:
case 3326:
case 3787:
case 283:
case 3400:
case 2082:
case 2784:
case 3514:
case 2157:
case 995:
case 2721:
case 648:
case 364:
case 160:
case 327:
case 3534:
case 2925:
case 2535:
case 891:
case 1097:
case 1368:
case 1924:
case 605:
case 4022:
case 3260:
case 3031:
case 614:
case 1974:
case 3563:
case 2394:
case 3794:
case 2897:
case 2500:
case 3122:
case 1621:
case 2868:
case 147:
case 3718:
case 235:
case 192:
case 2141:
case 2819:
case 1802:
case 1366:
case 426:
case 3451:
case 3886:
case 3128:
case 2457:
case 2023:
case 3922:
case 2717:
case 1965:
case 3832:
case 1668:
case 2779:
case 1426:
case 3421:
case 3154:
case 3772:
case 1650:
case 1034:
case 1276:
case 2594:
case 3764:
case 3682:
case 2472:
case 3980:
case 2510:
case 2458:
case 1351:
case 2481:
case 630:
case 940:
case 2477:
case 3897:
case 3416:
case 196:
case 2891:
case 2390:
case 2640:
case 449:
case 1236:
case 887:
case 240:
case 3510:
case 2346:
case 1659:
case 2732:
case 1789:
case 9:
case 2927:
case 936:
case 462:
case 971:
case 3880:
case 1706:
case 3497:
case 2009:
case 2011:
case 2777:
case 1288:
case 3607:
case 2946:
case 953:
case 1077:
case 730:
case 1569:
case 1578:
case 425:
case 2621:
case 643:
case 3498:
case 3707:
case 2923:
case 4085:
case 18:
case 1750:
case 3391:
case 2765:
case 3840:
case 2195:
case 1304:
case 1257:
case 351:
case 3061:
case 3169:
case 1779:
case 922:
case 2542:
case 1646:
case 1955:
case 1566:
case 2618:
case 3114:
case 437:
case 2099:
case 653:
case 2958:
case 265:
case 521:
case 3888:
case 2190:
case 2976:
case 25:
case 431:
case 458:
case 1183:
case 2218:
case 597:
case 984:
case 1465:
case 3745:
case 399:
case 3977:
case 2006:
case 3535:
case 857:
case 2400:
case 3403:
case 2421:
case 133:
case 3808:
case 324:
case 977:
case 2714:
case 3579:
case 2439:
case 1763:
case 3422:
case 1949:
case 806:
case 3551:
case 170:
case 1638:
case 2660:
case 3896:
case 1978:
case 2196:
case 1719:
case 2426:
case 3347:
case 1866:
case 1305:
case 227:
case 130:
case 2332:
case 4048:
case 1040:
case 1325:
case 1999:
case 3123:
case 1681:
case 4010:
case 1464:
case 714:
case 2789:
case 491:
case 1238:
case 1627:
case 2679:
case 1589:
case 3349:
case 114:
case 3714:
case 960:
case 3297:
case 3268:
case 566:
case 1294:
case 3864:
case 3656:
case 2849:
case 2372:
case 3110:
case 29:
case 1377:
case 2172:
case 3918:
case 3386:
case 1936:
case 2474:
case 383:
case 101:
case 1378:
case 2359:
case 490:
case 4057:
case 877:
case 3464:
case 683:
case 1532:
case 1761:
case 3038:
case 3146:
case 2540:
case 2341:
case 547:
case 2864:
case 1137:
case 690:
case 2454:
case 2937:
case 3791:
case 795:
case 3776:
case 4077:
case 447:
case 4046:
case 2378:
case 2122:
case 1667:
case 2856:
case 903:
case 1792:
case 319:
case 655:
case 52:
case 2262:
case 801:
case 2617:
case 1707:
case 2858:
case 950:
case 2692:
case 3272:
case 245:
case 454:
case 1839:
case 3649:
case 532:
case 2283:
case 3428:
case 584:
case 3625:
case 1023:
case 3044:
case 1478:
case 833:
case 2212:
case 2586:
case 154:
case 2997:
case 3675:
case 3544:
case 1746:
case 3069:
case 3062:
case 3471:
case 370:
case 885:
case 495:
case 83:
case 2466:
case 3678:
case 3176:
case 1671:
case 2105:
case 2948:
case 979:
case 2971:
case 1666:
case 3185:
case 2853:
case 1705:
case 951:
case 3824:
case 2109:
case 968:
case 999:
case 1813:
case 3041:
case 2961:
case 832:
case 2070:
case 535:
case 1099:
case 3589:
case 3221:
case 2806:
case 2423:
case 1820:
case 1156:
case 3827:
case 2086:
case 2211:
case 126:
case 2898:
case 1309:
case 2459:
case 270:
case 4025:
case 3048:
case 3312:
case 290:
case 48:
case 3005:
case 1609:
case 1087:
case 4042:
case 1006:
case 1542:
case 964:
case 1256:
case 2633:
case 376:
case 1662:
case 2291:
case 2012:
case 3851:
case 3455:
case 2364:
case 3679:
case 3058:
case 1593:
case 3374:
case 970:
case 2186:
case 1284:
case 55:
case 2159:
case 1808:
case 3384:
case 1329:
case 1614:
case 1514:
case 2665:
case 3796:
case 95:
case 2118:
case 1521:
case 405:
case 1893:
case 2314:
case 3046:
case 1454:
case 641:
case 3242:
case 3630:
case 3712:
case 1123:
case 1934:
case 16:
case 876:
case 703:
case 882:
case 1675:
case 406:
case 1781:
case 1554:
case 3132:
case 2845:
case 1929:
case 1599:
case 442:
case 3533:
case 571:
case 3606:
case 2642:
case 2563:
case 2516:
case 1170:
case 3911:
case 2488:
case 423:
case 1467:
case 1515:
case 967:
case 621:
case 3856:
case 1561:
case 4035:
case 2340:
case 2663:
case 2205:
case 699:
case 2429:
case 4007:
case 2074:
case 3336:
case 3222:
case 1834:
case 858:
case 1617:
case 2245:
case 1218:
case 461:
case 902:
case 2820:
case 531:
case 1237:
case 2451:
case 1324:
case 1439:
case 1363:
case 3829:
case 958:
case 2497:
case 1880:
case 2718:
case 3757:
case 310:
case 867:
case 225:
case 3687:
case 2645:
case 2612:
case 3214:
case 1379:
case 1721:
case 445:
case 432:
case 2399:
case 1230:
case 59:
case 3277:
case 63:
case 3609:
case 221:
case 2334:
case 1397:
case 831:
case 742:
case 1134:
case 3809:
case 1846:
case 1559:
case 444:
case 1247:
case 3187:
case 1821:
case 143:
case 3983:
case 1184:
case 2607:
case 1434:
case 1056:
case 3800:
case 3506:
case 3667:
case 1720:
case 3427:
case 3409:
case 3107:
case 3000:
case 2455:
case 1768:
case 1290:
case 3914:
case 3936:
case 3274:
case 3475:
case 769:
case 3412:
case 1113:
case 1876:
case 1424:
case 814:
case 2044:
case 2302:
case 904:
case 2861:
case 952:
case 1553:
case 924:
case 1588:
case 837:
case 3611:
case 3786:
case 475:
case 3435:
case 3504:
case 219:
case 2330:
case 3975:
case 2055:
case 2580:
case 1764:
case 1516:
case 1091:
case 3091:
case 1711:
case 670:
case 494:
case 2613:
case 3767:
case 2286:
case 1757:
case 2805:
case 3528:
case 2273:
case 3275:
case 1414:
case 3502:
case 3810:
case 3071:
case 77:
case 4028:
case 554:
case 3847:
case 1769:
case 2319:
case 575:
case 1314:
case 2250:
case 2740:
case 3388:
case 3356:
case 1115:
case 1014:
case 3241:
case 918:
case 3077:
case 272:
case 2917:
case 148:
case 1615:
case 3690:
case 2697:
case 1456:
case 1942:
case 3513:
case 328:
case 1809:
case 1982:
case 537:
case 1196:
case 866:
case 2781:
case 912:
case 1382:
case 1223:
case 1394:
case 1665:
case 753:
case 1208:
case 2352:
case 67:
case 2592:
case 157:
case 463:
case 1420:
case 3763:
case 2056:
case 22:
case 3083:
case 3096:
case 4091:
case 2647:
case 2333:
case 2674:
case 747:
case 326:
case 1854:
case 1992:
case 1822:
case 3192:
case 3012:
case 1631:
case 2631:
case 1229:
case 2670:
case 3647:
case 1674:
case 10:
case 271:
case 171:
case 2959:
case 3803:
case 94:
case 3102:
case 881:
case 645:
case 279:
case 492:
case 2796:
case 3373:
case 2848:
case 1360:
case 2480:
case 3383:
case 2625:
case 3034:
case 3663:
case 610:
case 526:
case 3694:
case 2605:
case 1282:
case 1605:
case 1350:
case 2298:
case 451:
case 2360:
case 1068:
case 2940:
case 2200:
case 1842:
case 1418:
case 524:
case 1954:
case 2530:
case 2154:
case 2107:
case 2318:
case 523:
case 2953:
case 2879:
case 2606:
case 3927:
case 2048:
case 2047:
case 2974:
case 709:
case 1280:
case 2164:
case 1491:
case 213:
case 4092:
case 1832:
case 1066:
case 1947:
case 485:
case 3158:
case 2420:
case 1198:
case 4058:
case 2551:
case 3987:
case 2919:
case 2835:
case 1105:
case 966:
case 3717:
case 267:
case 3072:
case 556:
case 3921:
case 727:
case 852:
case 3623:
case 1762:
case 559:
case 2701:
case 3883:
case 2964:
case 246:
case 3671:
case 1111:
case 985:
case 3499:
case 135:
case 1373:
case 3981:
case 2010:
case 2705:
case 3603:
case 2367:
case 3747:
case 3538:
case 1322:
case 639:
case 1117:
case 785:
case 2288:
case 2111:
case 3108:
case 3743:
case 3167:
case 3874:
case 1307:
case 3116:
case 3019:
case 3360:
case 234:
case 4033:
case 1518:
case 3947:
case 3529:
case 3955:
case 871:
case 1421:
case 1492:
case 1239:
case 4014:
case 2833:
case 1297:
case 352:
case 3988:
case 1482:
case 1857:
case 488:
case 2827:
case 623:
case 1825:
case 1002:
case 2114:
case 3055:
case 598:
case 698:
case 2818:
case 1037:
case 300:
case 2337:
case 1242:
case 2641:
case 2018:
case 3871:
case 2385:
case 2546:
case 3016:
case 3218:
case 503:
case 3572:
case 1319:
case 2022:
case 2735:
case 2083:
case 2377:
case 1044:
case 1233:
case 2482:
case 400:
case 562:
case 1004:
case 2312:
case 2410:
case 1000:
case 493:
case 594:
case 3476:
case 3190:
case 872:
case 1185:
case 859:
case 1736:
case 3171:
case 1794:
case 4006:
case 484:
case 2138:
case 1431:
case 1783:
case 2743:
case 3677:
case 1933:
case 2801:
case 1870:
case 2121:
case 2050:
case 4066:
case 412:
case 382:
case 2773:
case 2813:
case 3060:
case 1450:
case 3541:
case 760:
case 1729:
case 47:
case 2181:
case 899:
case 3823:
case 1917:
case 1595:
case 3237:
case 2191:
case 3520:
case 2748:
case 3966:
case 138:
case 1545:
case 2834:
case 3245:
case 3080:
case 3087:
case 775:
case 2778:
case 1051:
case 2081:
case 2351:
case 3415:
case 1399:
case 3926:
case 3220:
case 1401:
case 500:
case 3858:
case 928:
case 1767:
case 3557:
case 3129:
case 2761:
case 3820:
case 3865:
case 316:
case 1722:
case 2097:
case 455:
case 3853:
case 3413:
case 106:
case 2808:
case 2272:
case 3313:
case 2124:
case 417:
case 737:
case 3049:
case 2573:
case 140:
case 3594:
case 3486:
case 2053:
case 1422:
case 3512:
case 2257:
case 330:
case 3686:
case 646:
case 202:
case 959:
case 2499:
case 3178:
case 1053:
case 659:
case 180:
case 3635:
case 1537:
case 232:
case 436:
case 3583:
case 125:
case 1577:
case 869:
case 720:
case 2153:
case 2910:
case 284:
case 1672:
case 1009:
case 1855:
case 2815:
case 3377:
case 1369:
case 2650:
case 1306:
case 2782:
case 3710:
case 635:
case 1423:
case 1556:
case 3496:
case 739:
case 1357:
case 1317:
case 2144:
case 297:
case 640:
case 1622:
case 1655:
case 1112:
case 3140:
case 1313:
case 2738:
case 870:
case 2767:
case 3769:
case 2523:
case 3949:
case 249:
case 3494:
case 151:
case 3481:
case 3397:
case 2411:
case 2636:
case 2274:
case 3811:
case 3270:
case 1427:
case 2734:
case 896:
case 2724:
case 2515:
case 944:
case 1476:
case 3622:
case 626:
case 3215:
case 519:
case 2938:
case 2255:
case 2005:
case 3477:
case 1191:
case 2137:
case 2001:
case 1474:
case 599:
case 1340:
case 2982:
case 2276:
case 2126:
case 2572:
case 200:
case 3664:
case 1606:
case 3009:
case 3774:
case 1133:
case 1354:
case 3938:
case 87:
case 3043:
case 3559:
case 446:
case 994:
case 3838:
case 3495:
case 174:
case 3963:
case 2934:
case 3414:
case 2978:
case 2168:
case 1963:
case 3782:
case 3289:
case 3986:
case 2619:
case 166:
case 1483:
case 1433:
case 259:
case 1019:
case 533:
case 478:
case 3106:
case 2371:
case 2706:
case 530:
case 3719:
case 2981:
case 340:
case 4039:
case 186:
case 281:
case 98:
case 1224:
case 1403:
case 1199:
case 3314:
case 424:
case 2062:
case 1531:
case 2496:
case 1058:
case 596:
case 1103:
case 3953:
case 3932:
case 1425:
case 1583:
case 1187:
case 3037:
case 1469:
case 254:
case 1740:
case 678:
case 3545:
case 3760:
case 2226:
case 2183:
case 517:
case 1602:
case 1680:
case 2894:
case 763:
case 257:
case 3715:
case 3500:
case 1212:
case 3437:
case 3264:
case 1596:
case 1203:
case 165:
case 3850:
case 26:
case 3361:
case 4051:
case 898:
case 1102:
case 711:
case 2512:
case 2793:
case 4040:
case 1255:
case 4070:
case 1179:
case 2710:
case 541:
case 38:
case 778:
case 3156:
case 1962:
case 2311:
case 2795:
case 1209:
case 2638:
case 251:
case 49:
case 2163:
case 1520:
case 3633:
case 2180:
case 1930:
case 1154:
case 3424:
case 1852:
case 993:
case 1837:
case 264:
case 1263:
case 3492:
case 3321:
case 3873:
case 2418:
case 4029:
case 168:
case 2021:
case 3985:
case 2091:
case 3290:
case 3284:
case 3659:
case 4041:
case 2247:
case 3916:
case 1643:
case 2140:
case 3741:
case 2576:
case 3726:
case 1248:
case 1618:
case 1438:
case 518:
case 583:
case 122:
case 3956:
case 2210:
case 908:
case 3736:
case 239:
case 3941:
case 278:
case 2567:
case 3654:
case 793:
case 3238:
case 1270:
case 1200:
case 296:
case 797:
case 498:
case 2931:
case 3910:
case 2783:
case 668:
case 3287:
case 3145:
case 359:
case 620:
case 3345:
case 637:
case 3343:
case 74:
case 1806:
case 889:
case 302:
case 2296:
case 3447:
case 2275:
case 24:
case 80:
case 2206:
case 1953:
case 76:
case 261:
case 4023:
case 3398:
case 3839:
case 2608:
case 1243:
case 131:
case 2240:
case 1651:
case 3093:
case 2494:
case 2202:
case 1052:
case 3799:
case 2620:
case 1367:
case 2251:
case 2799:
case 1952:
case 1501:
case 4088:
case 1956:
case 2622:
case 946:
case 1826:
case 2562:
case 3795:
case 2733:
case 4002:
case 2672:
case 2266:
case 3307:
case 31:
case 1036:
case 3699:
case 1249:
case 2176:
case 925:
case 3601:
case 407:
case 2529:
case 365:
case 384:
case 973:
case 3100:
case 2666:
case 1327:
case 2984:
case 3236:
case 3490:
case 3753:
case 3584:
case 2167:
case 4083:
case 1525:
case 2554:
case 1391:
case 2460:
case 647:
case 3067:
case 3928:
case 3615:
case 336:
case 2668:
case 2658:
case 2604:
case 2020:
case 3200:
case 3225:
case 2694:
case 1144:
case 942:
case 2131:
case 3233:
case 3376:
case 843:
case 4062:
case 1836:
case 704:
case 3501:
case 3773:
case 3257:
case 1504:
case 416:
case 3527:
case 2763:
case 2950:
case 3161:
case 469:
case 1558:
case 3669:
case 305:
case 3797:
case 1088:
case 3731:
case 51:
case 4076:
case 914:
case 2354:
case 945:
case 46:
case 1405:
case 3148:
case 2281:
case 865:
case 1598:
case 3491:
case 3523:
case 1387:
case 2991:
case 2945:
case 909:
case 3331:
case 1461:
case 569:
case 2759:
case 2119:
case 1344:
case 1743:
case 3027:
case 3142:
case 1128:
case 2379:
case 3843:
case 2788:
case 3064:
case 175:
case 3478:
case 1481:
case 3640:
case 2794:
case 325:
case 3193:
case 3817:
case 2193:
case 3090:
case 901:
case 3632:
case 590:
case 285:
case 1054:
case 2682:
case 725:
case 2450:
case 1345:
case 3212:
case 85:
case 2728:
case 3766:
case 4043:
case 342:
case 321:
case 3408:
case 3157:
case 61:
case 1222:
case 1281:
case 2686:
case 1508:
case 1062:
case 1355:
case 3333:
case 1709:
case 377:
case 673:
case 1944:
case 1889:
case 751:
case 1136:
case 3315:
case 2582:
case 256:
case 1765:
case 1718:
case 2270:
case 2173:
case 1174:
case 2863:
case 3008:
case 3508:
case 1108:
case 401:
case 726:
case 1519:
case 7:
case 3357:
case 3425:
case 486:
case 1083:
case 3184:
case 3030:
case 757:
case 1969:
case 3338:
case 1341:
case 86:
case 2643:
case 3042:
case 3025:
case 1548:
case 2213:
case 616:
case 1028:
case 1918:
case 233:
case 815:
case 3458:
case 1219:
case 780:
case 1780:
case 4044:
case 3944:
case 514:
case 2648:
case 1998:
case 682:
case 2589:
case 2842:
case 1241:
case 1300:
case 4073:
case 3695:
case 2986:
case 477:
case 1817:
case 2445:
case 2811:
case 1402:
case 2654:
case 549:
case 472:
case 1410:
case 2113:
case 2064:
case 2522:
case 2088:
case 3887:
case 3282:
case 3590:
case 3994:
case 443:
case 1435:
case 1536:
case 758:
case 1057:
case 1093:
case 1027:
case 2965:
case 2591:
case 2719:
case 3968:
case 2387:
case 879:
case 3217:
case 1371:
case 2104:
case 1507:
case 3098:
case 1698:
case 118:
case 1050:
case 695:
case 1258:
case 3560:
case 1118:
case 1524:
case 1269:
case 3341:
case 2004:
case 368:
case 649:
case 2407:
case 2414:
case 510:
case 3197:
case 3866:
case 4080:
case 2581:
case 557:
case 2597:
case 578:
case 499:
case 3488:
case 1318:
case 394:
case 188:
case 3821:
case 4037:
case 344:
case 2224:
case 3089:
case 41:
case 2844:
case 1485:
case 2560:
case 3487:
case 1119:
case 21:
case 3585:
case 1989:
case 372:
case 1273:
case 2468:
case 3899:
case 291:
case 3406:
case 2766:
case 671:
case 937:
case 2230:
case 2476:
case 3837:
case 1448:
case 2875:
case 2902:
case 92:
case 3271:
case 1043:
case 3082:
case 2357:
case 2408:
case 3310:
case 1633:
case 3670:
case 117:
case 2401:
case 3554:
case 415:
case 1132:
case 1994:
case 2943:
case 1293:
case 1176:
case 153:
case 2437:
case 441:
case 317:
case 2470:
case 1547:
case 1793:
case 3203:
case 1996:
case 1380:
case 3168:
case 2179:
case 3748:
case 2909:
case 1760:
case 1669:
case 1557:
case 1217:
case 1597:
case 1985:
case 54:
case 2884:
case 2248:
case 2484:
case 1939:
case 2363:
case 2443:
case 2526:
case 206:
case 181:
case 1107:
case 3358:
case 1856:
case 2061:
case 2221:
case 2234:
case 2736:
case 2755:
case 3094:
case 1587:
case 3602:
case 686:
case 2425:
case 429:
case 3053:
case 1887:
case 1950:
case 1678:
case 3234:
case 1766:
case 276:
case 1717:
case 2123:
case 3725:
case 694:
case 2073:
case 2280:
case 27:
case 3459:
case 3335:
case 2737:
case 1070:
case 2989:
case 1190:
case 3159:
case 1699:
case 347:
case 1682:
case 3627:
case 3279:
case 3232:
case 1810:
case 805:
case 3285:
case 3815:
case 2358:
case 282:
case 184:
case 666:
case 3344:
case 2895:
case 3127:
case 3342:
case 1195:
case 986:
case 1573:
case 3036:
case 3833:
case 182:
case 3643:
case 1848:
case 2432:
case 3368:
case 3420:
case 1584:
case 3789:
case 1533:
case 242:
case 4003:
case 2994:
case 2502:
case 3150:
case 5:
case 513:
case 929:
case 1055:
case 794:
case 1919:
case 109:
case 73:
case 2575:
case 752:
case 3961:
case 3593:
case 1807:
case 2375:
case 374:
case 465:
case 3047:
case 3380:
case 3881:
case 628:
case 2398:
case 105:
case 2780:
case 874:
case 2727:
case 811:
case 587:
case 1205:
case 2063:
case 2869:
case 3316:
case 3480:
case 733:
case 954:
case 2557:
case 3224:
case 2066:
case 1904:
case 3068:
case 2103:
case 991:
case 1685:
case 3591:
case 4089:
case 3111:
case 2207:
case 2968:
case 1637:
case 3369:
case 927:
case 408:
case 2812:
case 3644:
case 1875:
case 3281:
case 1188:
case 349:
case 1641:
case 1882:
case 367:
case 44:
case 650:
case 207:
case 3556:
case 3869:
case 1106:
case 1791:
case 2442:
case 1477:
case 1654:
case 3467:
case 2435:
case 3018:
case 3269:
case 770:
case 2629:
case 1964:
case 1938:
case 734:
case 205:
case 120:
case 2987:
case 392:
case 1608:
case 2550:
case 529:
case 2391:
case 2320:
case 550:
case 3688:
case 2802:
case 975:
case 3597:
case 3352:
case 1664:
case 3844:
case 1071:
case 2171:
case 2584:
case 2197:
case 1958:
case 2428:
case 3893:
case 722:
case 3505:
case 2366:
case 2347:
case 836:
case 1784:
case 868:
case 2823:
case 2596:
case 2413:
case 2504:
case 2702:
case 2145:
case 3819:
case 1959:
case 2544:
case 3359:
case 629:
case 3642:
case 457:
case 2235:
case 728:
case 3828:
case 2688:
case 2744:
case 2571:
case 2730:
case 3144:
case 1987:
case 2223:
case 1572:
case 633:
case 1005:
case 3834:
case 3762:
case 1022:
case 3021:
case 1526:
case 1714:
case 1171:
case 706:
case 696:
case 2106:
case 3353:
case 2324:
case 2269:
case 3805:
case 2821:
case 2486:
case 2051:
case 809:
case 150:
case 3729:
case 464:
case 3720:
case 2882:
case 470:
case 3417:
case 2233:
case 3660:
case 2713:
case 3305:
case 13:
case 2369:
case 2433:
case 1487:
case 3549:
case 551:
case 1395:
case 2237:
case 545:
case 299:
case 2316:
case 3727:
case 3389:
case 1592:
case 1494:
case 1073:
case 764:
case 2696:
case 2889:
case 2328:
case 3010:
case 306:
case 2509:
case 1860:
case 2289:
case 855:
case 1089:
case 2306:
case 2479:
case 3124:
case 2695:
case 422:
case 3063:
case 2826:
case 2924:
case 507:
case 3299:
case 3548:
case 1463:
case 2389:
case 393:
case 732:
case 2017:
case 3562:
case 4011:
case 2908:
case 2549:
case 3722:
case 176:
case 404:
case 736:
case 1010:
case 2075:
case 2708:
case 2896:
case 2:
case 1168:
case 2483:
case 1957:
case 3126:
case 2268:
case 2244:
case 1130:
case 1751:
case 3665:
case 1550:
case 716:
case 2031:
case 2667:
case 3170:
case 1383:
case 1226:
case 2030:
case 1065:
case 1679:
case 1797:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1691150401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,];
var gg_b = "1691150401/";

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
