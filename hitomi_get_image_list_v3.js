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
case 2492:
case 3144:
case 3323:
case 1128:
case 933:
case 901:
case 3071:
case 4068:
case 1821:
case 989:
case 3020:
case 3145:
case 296:
case 91:
case 3992:
case 726:
case 2339:
case 3796:
case 1268:
case 871:
case 679:
case 821:
case 1002:
case 3296:
case 2899:
case 381:
case 3205:
case 3372:
case 2293:
case 3512:
case 1081:
case 1407:
case 3204:
case 3149:
case 2708:
case 2062:
case 309:
case 1866:
case 3564:
case 315:
case 461:
case 1346:
case 3191:
case 3338:
case 2894:
case 2335:
case 3018:
case 2097:
case 2326:
case 2817:
case 3898:
case 2334:
case 190:
case 1110:
case 2568:
case 1271:
case 1421:
case 949:
case 2012:
case 3906:
case 2641:
case 2740:
case 1220:
case 2606:
case 3941:
case 568:
case 3186:
case 1009:
case 2551:
case 1156:
case 1670:
case 3562:
case 1720:
case 1963:
case 1621:
case 969:
case 3359:
case 2347:
case 3202:
case 57:
case 2518:
case 2378:
case 3374:
case 1816:
case 2065:
case 1389:
case 52:
case 361:
case 415:
case 812:
case 3781:
case 1540:
case 129:
case 3137:
case 2571:
case 2031:
case 2520:
case 850:
case 906:
case 1005:
case 2694:
case 3403:
case 3519:
case 213:
case 771:
case 1384:
case 1718:
case 1466:
case 409:
case 23:
case 3354:
case 2998:
case 876:
case 2695:
case 3603:
case 2494:
case 2183:
case 2617:
case 3698:
case 2903:
case 367:
case 2052:
case 297:
case 1732:
case 579:
case 2023:
case 3061:
case 4078:
case 2320:
case 1232:
case 347:
case 1043:
case 529:
case 762:
case 3555:
case 3445:
case 2558:
case 3039:
case 1628:
case 1747:
case 4032:
case 3319:
case 2477:
case 1936:
case 2789:
case 2677:
case 3948:
case 727:
case 2727:
case 3554:
case 2192:
case 2945:
case 808:
case 96:
case 283:
case 4058:
case 3491:
case 239:
case 345:
case 3290:
case 2038:
case 2578:
case 3397:
case 2784:
case 1929:
case 882:
case 1107:
case 775:
case 2457:
case 12:
case 9:
case 1987:
case 3559:
case 2284:
case 1589:
case 3649:
case 2657:
case 3574:
case 3314:
case 17:
case 1876:
case 3788:
case 3312:
case 3032:
case 102:
case 1460:
case 2199:
case 1261:
case 1828:
case 875:
case 472:
case 1739:
case 3364:
case 782:
case 467:
case 2059:
case 1501:
case 447:
case 1656:
case 422:
case 3486:
case 919:
case 1239:
case 2877:
case 2194:
case 3552:
case 3442:
case 2483:
case 953:
case 263:
case 1922:
case 2561:
case 1166:
case 4035:
case 1090:
case 4034:
case 1810:
case 2195:
case 730:
case 2683:
case 2117:
case 3331:
case 1582:
case 243:
case 2942:
case 877:
case 3058:
case 2746:
case 465:
case 2539:
case 3437:
case 1476:
case 2600:
case 3180:
case 1234:
case 2701:
case 2079:
case 2400:
case 3637:
case 1676:
case 1235:
case 445:
case 454:
case 2054:
case 1088:
case 2201:
case 3369:
case 3849:
case 3647:
case 407:
case 3:
case 1587:
case 3678:
case 1744:
case 2675:
case 3839:
case 3974:
case 3228:
case 2225:
case 1745:
case 2475:
case 2459:
case 2724:
case 888:
case 1989:
case 3447:
case 1056:
case 162:
case 521:
case 4044:
case 2591:
case 3632:
case 2932:
case 244:
case 255:
case 954:
case 2165:
case 142:
case 1363:
case 127:
case 1843:
case 4045:
case 2679:
case 1525:
case 3835:
case 2838:
case 748:
case 3955:
case 3658:
case 2544:
case 1488:
case 2729:
case 1249:
case 2958:
case 4091:
case 2287:
case 3548:
case 3458:
case 1105:
case 29:
case 3954:
case 2545:
case 1688:
case 36:
case 3577:
case 1536:
case 1749:
case 2131:
case 3317:
case 3834:
case 2479:
case 3395:
case 972:
case 1791:
case 257:
case 3411:
case 2380:
case 3710:
case 4049:
case 1291:
case 378:
case 48:
case 77:
case 125:
case 2169:
case 3233:
case 1490:
case 2939:
case 1786:
case 3256:
case 848:
case 625:
case 90:
case 3045:
case 675:
case 2077:
case 3439:
case 3756:
case 3171:
case 985:
case 1522:
case 2961:
case 3832:
case 2623:
case 2119:
case 182:
case 2773:
case 353:
case 1553:
case 1443:
case 4086:
case 2652:
case 307:
case 1102:
case 1643:
case 1982:
case 3583:
case 2542:
case 236:
case 3461:
case 2586:
case 2855:
case 3635:
case 3426:
case 3938:
case 3434:
case 2935:
case 2638:
case 642:
case 512:
case 2438:
case 478:
case 677:
case 130:
case 3151:
case 38:
case 1737:
case 4042:
case 2722:
case 576:
case 44:
case 1573:
case 2753:
case 1313:
case 305:
case 1033:
case 2472:
case 4037:
case 1742:
case 2222:
case 2819:
case 1696:
case 621:
case 3468:
case 2465:
case 3716:
case 879:
case 2665:
case 406:
case 508:
case 3912:
case 2159:
case 1373:
case 2041:
case 1409:
case 2612:
case 981:
case 2175:
case 909:
case 1021:
case 3871:
case 1070:
case 1530:
case 3820:
case 2469:
case 1190:
case 3567:
case 1066:
case 220:
case 3818:
case 3003:
case 2814:
case 2669:
case 3969:
case 469:
case 2179:
case 946:
case 1405:
case 1881:
case 1322:
case 2230:
case 3158:
case 1604:
case 1404:
case 1605:
case 1188:
case 2154:
case 2213:
case 1050:
case 2631:
case 3383:
case 2730:
case 3931:
case 2344:
case 2123:
case 2619:
case 3594:
case 3919:
case 1896:
case 1324:
case 1336:
case 3595:
case 2503:
case 1016:
case 3868:
case 3348:
case 2865:
case 961:
case 251:
case 3471:
case 2263:
case 818:
case 2920:
case 2763:
case 1809:
case 306:
case 3620:
case 941:
case 2697:
case 3618:
case 3915:
case 676:
case 3997:
case 2615:
case 1329:
case 1298:
case 2414:
case 433:
case 401:
case 3357:
case 489:
case 626:
case 3914:
case 2614:
case 2415:
case 1681:
case 1007:
case 171:
case 235:
case 1780:
case 3451:
case 3135:
case 3250:
case 1280:
case 3962:
case 121:
case 1563:
case 612:
case 2951:
case 1805:
case 3750:
case 3651:
case 577:
case 4003:
case 272:
case 3167:
case 1873:
case 3023:
case 957:
case 267:
case 903:
case 3320:
case 4074:
case 2579:
case 1436:
case 1625:
case 2319:
case 2039:
case 2886:
case 3558:
case 3448:
case 2644:
case 1775:
case 2948:
case 2444:
case 3192:
case 1588:
case 3727:
case 1425:
case 1624:
case 404:
case 823:
case 3789:
case 1853:
case 152:
case 3991:
case 383:
case 2691:
case 4079:
case 1822:
case 1381:
case 265:
case 110:
case 1910:
case 3351:
case 3883:
case 2842:
case 1113:
case 1779:
case 2559:
case 3285:
case 1687:
case 3578:
case 3784:
case 2035:
case 2397:
case 3800:
case 1755:
case 2026:
case 3785:
case 2574:
case 1754:
case 443:
case 1255:
case 3657:
case 3949:
case 287:
case 3282:
case 1960:
case 1723:
case 2032:
case 1673:
case 1752:
case 2312:
case 2572:
case 1252:
case 3059:
case 497:
case 698:
case 3106:
case 4052:
case 3141:
case 610:
case 1825:
case 3535:
case 2538:
case 1396:
case 1824:
case 3877:
case 1163:
case 3526:
case 652:
case 3848:
case 1956:
case 2365:
case 1653:
case 2552:
case 2891:
case 1453:
case 1543:
case 3117:
case 2198:
case 3942:
case 343:
case 3683:
case 1272:
case 1305:
case 936:
case 3701:
case 495:
case 674:
case 3079:
case 2900:
case 211:
case 3746:
case 2180:
case 4072:
case 773:
case 3600:
case 1084:
case 483:
case 2058:
case 3055:
case 1738:
case 858:
case 723:
case 3857:
case 3246:
case 2849:
case 624:
case 3937:
case 1976:
case 1238:
case 1125:
case 3806:
case 2209:
case 680:
case 246:
case 2144:
case 2323:
case 396:
case 956:
case 2020:
case 266:
case 3177:
case 1863:
case 1136:
case 1343:
case 1124:
case 2531:
case 920:
case 3667:
case 2967:
case 3339:
case 1764:
case 3899:
case 1765:
case 970:
case 2569:
case 459:
case 1613:
case 1907:
case 3293:
case 2512:
case 1187:
case 2704:
case 281:
case 3793:
case 4069:
case 209:
case 3708:
case 3157:
case 1413:
case 1630:
case 1509:
case 2051:
case 3097:
case 2338:
case 3894:
case 3015:
case 140:
case 491:
case 1269:
case 215:
case 2564:
case 3568:
case 2565:
case 3817:
case 3334:
case 2803:
case 632:
case 3014:
case 4019:
case 510:
case 3012:
case 598:
case 3641:
case 2906:
case 132:
case 2562:
case 359:
case 3406:
case 3518:
case 3378:
case 2515:
case 2375:
case 2359:
case 3867:
case 1719:
case 3347:
case 3064:
case 2702:
case 2068:
case 3065:
case 2514:
case 2374:
case 1219:
case 391:
case 2781:
case 3980:
case 937:
case 2680:
case 3100:
case 1390:
case 1813:
case 4015:
case 524:
case 1008:
case 4014:
case 2137:
case 2480:
case 3571:
case 241:
case 1950:
case 3358:
case 1797:
case 1214:
case 2379:
case 3694:
case 3495:
case 1502:
case 1215:
case 3695:
case 2603:
case 1297:
case 3069:
case 451:
case 3664:
case 2468:
case 2216:
case 3099:
case 1267:
case 2716:
case 3968:
case 2668:
case 2178:
case 4067:
case 600:
case 1507:
case 1292:
case 2147:
case 2820:
case 3412:
case 573:
case 1909:
case 2871:
case 3174:
case 1792:
case 2300:
case 3094:
case 320:
case 3469:
case 2567:
case 499:
case 2003:
case 2111:
case 3337:
case 370:
case 1904:
case 2158:
case 1493:
case 2080:
case 201:
case 3713:
case 233:
case 2383:
case 3342:
case 3862:
case 2931:
case 1608:
case 3154:
case 3213:
case 21:
case 1693:
case 2207:
case 1185:
case 1328:
case 1299:
case 3619:
case 4006:
case 3864:
case 2161:
case 1566:
case 3123:
case 3067:
case 3345:
case 93:
case 2868:
case 1182:
case 3598:
case 2377:
case 2420:
case 840:
case 351:
case 337:
case 1640:
case 2671:
case 414:
case 2770:
case 3971:
case 1440:
case 1550:
case 206:
case 3092:
case 2620:
case 1241:
case 3920:
case 3172:
case 2915:
case 2618:
case 3697:
case 3415:
case 2599:
case 2418:
case 1795:
case 3869:
case 100:
case 3391:
case 2250:
case 249:
case 335:
case 1981:
case 4094:
case 2541:
case 1101:
case 2506:
case 1013:
case 4095:
case 1808:
case 2651:
case 1030:
case 1570:
case 4017:
case 3951:
case 1310:
case 1893:
case 3662:
case 592:
case 3831:
case 2962:
case 1521:
case 3224:
case 3675:
case 1427:
case 3978:
case 1277:
case 2839:
case 2975:
case 2678:
case 1489:
case 3947:
case 2959:
case 3112:
case 1248:
case 500:
case 2086:
case 2647:
case 3725:
case 1689:
case 1777:
case 3736:
case 3724:
case 1627:
case 436:
case 1748:
case 2228:
case 2341:
case 355:
case 3932:
case 3164:
case 3591:
case 983:
case 1321:
case 1882:
case 364:
case 3165:
case 1510:
case 2432:
case 4077:
case 158:
case 1366:
case 752:
case 1257:
case 3655:
case 1846:
case 2658:
case 1801:
case 2955:
case 3787:
case 1528:
case 3679:
case 2835:
case 2395:
case 2037:
case 3229:
case 2826:
case 798:
case 3479:
case 2317:
case 2834:
case 3455:
case 26:
case 1484:
case 3287:
case 2458:
case 39:
case 95:
case 3380:
case 2411:
case 331:
case 1053:
case 303:
case 228:
case 2210:
case 1022:
case 3169:
case 3083:
case 2042:
case 2611:
case 2710:
case 2044:
case 3859:
case 2847:
case 2639:
case 2500:
case 3939:
case 1025:
case 852:
case 2878:
case 1576:
case 3537:
case 1827:
case 3874:
case 464:
case 1316:
case 2439:
case 1036:
case 1889:
case 2120:
case 963:
case 207:
case 3119:
case 1482:
case 2661:
case 3623:
case 2923:
case 336:
case 384:
case 3273:
case 2461:
case 1943:
case 2583:
case 3542:
case 3638:
case 3935:
case 1029:
case 2276:
case 457:
case 1700:
case 824:
case 3586:
case 2151:
case 28:
case 1446:
case 3057:
case 1401:
case 2049:
case 3934:
case 219:
case 3438:
case 3926:
case 2626:
case 4000:
case 173:
case 3753:
case 2972:
case 3115:
case 1283:
case 2118:
case 2811:
case 3253:
case 3114:
case 2610:
case 268:
case 310:
case 3910:
case 1351:
case 398:
case 958:
case 4085:
case 1883:
case 79:
case 2211:
case 4084:
case 183:
case 992:
case 1991:
case 3933:
case 2410:
case 3381:
case 1072:
case 2876:
case 3279:
case 2527:
case 1949:
case 884:
case 3130:
case 2258:
case 3487:
case 836:
case 3779:
case 22:
case 3001:
case 703:
case 3687:
case 3046:
case 2107:
case 1800:
case 3755:
case 591:
case 2043:
case 2116:
case 4089:
case 1511:
case 1167:
case 3873:
case 1023:
case 1052:
case 1945:
case 2585:
case 3259:
case 1727:
case 3588:
case 1192:
case 15:
case 3636:
case 2747:
case 1227:
case 3625:
case 3274:
case 1477:
case 2925:
case 2628:
case 1944:
case 2584:
case 1448:
case 53:
case 1942:
case 1195:
case 3305:
case 288:
case 2810:
case 2308:
case 3622:
case 65:
case 596:
case 2922:
case 2166:
case 4001:
case 163:
case 1194:
case 2953:
case 3085:
case 1246:
case 2726:
case 1054:
case 1201:
case 864:
case 410:
case 2150:
case 3238:
case 2676:
case 498:
case 1701:
case 3829:
case 1746:
case 1539:
case 2476:
case 452:
case 2735:
case 855:
case 1055:
case 89:
case 3223:
case 2261:
case 923:
case 202:
case 2660:
case 2761:
case 1282:
case 3960:
case 3673:
case 973:
case 2973:
case 2121:
case 3824:
case 784:
case 1526:
case 736:
case 3836:
case 2239:
case 3956:
case 1848:
case 3089:
case 2656:
case 474:
case 2501:
case 1059:
case 1106:
case 2739:
case 1535:
case 424:
case 803:
case 831:
case 857:
case 3396:
case 1062:
case 2930:
case 3413:
case 1157:
case 770:
case 2407:
case 3509:
case 3613:
case 2081:
case 2913:
case 2607:
case 3129:
case 2110:
case 218:
case 360:
case 1326:
case 4093:
case 1895:
case 1014:
case 4008:
case 659:
case 1097:
case 837:
case 3596:
case 340:
case 2593:
case 3505:
case 196:
case 2508:
case 3136:
case 1177:
case 3124:
case 3343:
case 613:
case 3125:
case 3040:
case 3712:
case 2128:
case 63:
case 1492:
case 1841:
case 1361:
case 3916:
case 1899:
case 899:
case 2616:
case 3765:
case 3265:
case 432:
case 2268:
case 835:
case 1339:
case 1520:
case 814:
case 460:
case 597:
case 2650:
case 2751:
case 2176:
case 1311:
case 3950:
case 191:
case 229:
case 1980:
case 440:
case 2004:
case 3813:
case 3390:
case 1903:
case 1998:
case 2218:
case 3297:
case 1183:
case 1494:
case 2385:
case 3388:
case 799:
case 2384:
case 3122:
case 3797:
case 1358:
case 3715:
case 3153:
case 735:
case 1694:
case 870:
case 583:
case 159:
case 3921:
case 1240:
case 2670:
case 1551:
case 2009:
case 3970:
case 2470:
case 1606:
case 1641:
case 2271:
case 2421:
case 2389:
case 1699:
case 2327:
case 3219:
case 2816:
case 1378:
case 2096:
case 737:
case 3719:
case 3173:
case 1064:
case 4030:
case 1814:
case 859:
case 651:
case 170:
case 637:
case 1017:
case 4013:
case 1897:
case 2066:
case 120:
case 1469:
case 2190:
case 1730:
case 2050:
case 400:
case 2188:
case 1213:
case 1154:
case 2404:
case 3185:
case 2908:
case 1713:
case 1179:
case 2353:
case 1431:
case 796:
case 1099:
case 2802:
case 3356:
case 3267:
case 1464:
case 1665:
case 960:
case 1465:
case 2696:
case 699:
case 3996:
case 1819:
case 212:
case 2070:
case 1174:
case 3063:
case 1175:
case 3360:
case 813:
case 2409:
case 3507:
case 1612:
case 1006:
case 1159:
case 2373:
case 1415:
case 1497:
case 300:
case 1869:
case 896:
case 1349:
case 2387:
case 1918:
case 1615:
case 3217:
case 1414:
case 3295:
case 1951:
case 2805:
case 3570:
case 2481:
case 3893:
case 3310:
case 1662:
case 199:
case 2280:
case 221:
case 73:
case 1138:
case 1462:
case 271:
case 2780:
case 713:
case 2804:
case 3101:
case 2681:
case 3013:
case 1865:
case 1345:
case 3799:
case 3902:
case 1503:
case 2602:
case 2143:
case 1123:
case 1344:
case 557:
case 3440:
case 3550:
case 2809:
case 3206:
case 1920:
case 1580:
case 670:
case 3706:
case 1303:
case 2749:
case 1131:
case 1398:
case 2524:
case 1479:
case 804:
case 2688:
case 1654:
case 739:
case 3193:
case 3484:
case 2105:
case 3988:
case 19:
case 1544:
case 783:
case 1454:
case 3846:
case 1655:
case 2984:
case 1958:
case 636:
case 684:
case 3801:
case 2104:
case 1787:
case 1679:
case 473:
case 225:
case 2490:
case 1083:
case 551:
case 3350:
case 2291:
case 131:
case 3053:
case 924:
case 2791:
case 4029:
case 2056:
case 2109:
case 1549:
case 1736:
case 2989:
case 2244:
case 1674:
case 3427:
case 1675:
case 2529:
case 1474:
case 797:
case 2245:
case 1725:
case 2363:
case 2843:
case 3321:
case 535:
case 910:
case 998:
case 3370:
case 3533:
case 1823:
case 1932:
case 155:
case 3073:
case 2196:
case 1591:
case 392:
case 599:
case 262:
case 3446:
case 230:
case 655:
case 644:
case 1438:
case 1926:
case 3200:
case 3029:
case 1935:
case 4022:
case 1879:
case 2237:
case 2901:
case 3646:
case 514:
case 3700:
case 664:
case 2946:
case 2181:
case 1586:
case 1253:
case 323:
case 1472:
case 2742:
case 3783:
case 208:
case 3307:
case 373:
case 2573:
case 2890:
case 1753:
case 1115:
case 1197:
case 1722:
case 2242:
case 3283:
case 3560:
case 3576:
case 3316:
case 603:
case 1874:
case 3024:
case 3036:
case 520:
case 3889:
case 492:
case 895:
case 2028:
case 3025:
case 883:
case 2786:
case 570:
case 2982:
case 1452:
case 2643:
case 3682:
case 1652:
case 1119:
case 3482:
case 2443:
case 556:
case 1961:
case 1204:
case 3407:
case 1051:
case 3930:
case 109:
case 587:
case 3850:
case 976:
case 2231:
case 1880:
case 2129:
case 1704:
case 3913:
case 1372:
case 1205:
case 1512:
case 2613:
case 2907:
case 3081:
case 1803:
case 479:
case 71:
case 1898:
case 390:
case 260:
case 733:
case 3866:
case 3133:
case 3346:
case 115:
case 1564:
case 634:
case 3301:
case 2596:
case 1191:
case 1338:
case 1709:
case 2136:
case 2863:
case 2124:
case 1531:
case 1020:
case 585:
case 166:
case 2212:
case 3593:
case 1209:
case 3128:
case 2125:
case 2264:
case 511:
case 869:
case 2765:
case 2916:
case 3768:
case 3002:
case 1296:
case 117:
case 3416:
case 50:
case 3268:
case 2265:
case 141:
case 3650:
case 379:
case 1281:
case 3004:
case 2390:
case 3251:
case 2813:
case 547:
case 2262:
case 329:
case 1354:
case 2388:
case 280:
case 646:
case 769:
case 1917:
case 2297:
case 3218:
case 1698:
case 1403:
case 1994:
case 1519:
case 1498:
case 2715:
case 516:
case 749:
case 666:
case 2966:
case 186:
case 134:
case 3771:
case 3670:
case 4002:
case 615:
case 1562:
case 2921:
case 3720:
case 232:
case 2463:
case 545:
case 554:
case 1906:
case 971:
case 2581:
case 3220:
case 3327:
case 1514:
case 1999:
case 681:
case 1068:
case 2719:
case 2173:
case 3096:
case 833:
case 3160:
case 609:
case 1842:
case 1491:
case 1362:
case 76:
case 145:
case 3433:
case 298:
case 3610:
case 210:
case 586:
case 2933:
case 962:
case 3211:
case 74:
case 2487:
case 3589:
case 2279:
case 3876:
case 687:
case 488:
case 807:
case 2755:
case 1315:
case 4090:
case 3929:
case 1397:
case 3758:
case 853:
case 3107:
case 2687:
case 2113:
case 32:
case 1449:
case 1559:
case 3987:
case 925:
case 88:
case 122:
case 147:
case 611:
case 3043:
case 3340:
case 224:
case 3936:
case 3428:
case 3924:
case 794:
case 2636:
case 2275:
case 2624:
case 2588:
case 685:
case 3585:
case 2775:
case 1644:
case 1445:
case 1886:
case 402:
case 3584:
case 3628:
case 1039:
case 2424:
case 2759:
case 3308:
case 47:
case 546:
case 388:
case 2422:
case 719:
case 3810:
case 1642:
case 1103:
case 2453:
case 1198:
case 1983:
case 982:
case 1442:
case 2653:
case 42:
case 185:
case 3833:
case 3166:
case 1523:
case 8:
case 2622:
case 3090:
case 3676:
case 1637:
case 517:
case 3150:
case 10:
case 1369:
case 2085:
case 1849:
case 2887:
case 2738:
case 3735:
case 1058:
case 2829:
case 3226:
case 3234:
case 1180:
case 3476:
case 705:
case 3460:
case 2309:
case 1743:
case 2223:
case 3261:
case 2473:
case 1312:
case 3973:
case 1032:
case 3761:
case 2723:
case 187:
case 3660:
case 930:
case 2089:
case 515:
case 3170:
case 4043:
case 2825:
case 3456:
case 3739:
case 828:
case 654:
case 1047:
case 1686:
case 2484:
case 1548:
case 1954:
case 2685:
case 2988:
case 3105:
case 3985:
case 2108:
case 16:
case 1826:
case 4010:
case 1577:
case 3536:
case 1834:
case 754:
case 607:
case 1317:
case 653:
case 1395:
case 3076:
case 1037:
case 765:
case 3525:
case 4033:
case 2801:
case 3104:
case 1955:
case 2684:
case 2366:
case 3488:
case 3984:
case 2350:
case 1710:
case 430:
case 1611:
case 1233:
case 3690:
case 128:
case 1210:
case 3791:
case 2053:
case 375:
case 1228:
case 3927:
case 1478:
case 97:
case 3745:
case 2627:
case 747:
case 605:
case 2777:
case 722:
case 3109:
case 2489:
case 92:
case 1959:
case 885:
case 3587:
case 2248:
case 772:
case 893:
case 2277:
case 1839:
case 2510:
case 2370:
case 258:
case 1168:
case 968:
case 3363:
case 342:
case 716:
case 3843:
case 2882:
case 3060:
case 362:
case 569:
case 811:
case 292:
case 68:
case 2073:
case 1632:
case 2533:
case 4028:
case 1861:
case 1634:
case 1435:
case 1626:
case 119:
case 822:
case 1049:
case 2401:
case 1776:
case 3737:
case 872:
case 2884:
case 3181:
case 1858:
case 694:
case 2700:
case 1426:
case 1635:
case 1276:
case 3237:
case 785:
case 1434:
case 2029:
case 3742:
case 3330:
case 2283:
case 1118:
case 2560:
case 1972:
case 711:
case 105:
case 427:
case 442:
case 854:
case 1045:
case 2024:
case 2036:
case 2827:
case 2316:
case 1756:
case 1439:
case 2140:
case 3786:
case 3028:
case 678:
case 787:
case 1256:
case 1367:
case 1847:
case 1044:
case 2682:
case 501:
case 4056:
case 64:
case 1392:
case 988:
case 1461:
case 51:
case 382:
case 2482:
case 107:
case 1098:
case 2516:
case 421:
case 709:
case 886:
case 1969:
case 1818:
case 1300:
case 471:
case 1207:
case 2693:
case 3404:
case 2185:
case 1851:
case 2608:
case 3188:
case 553:
case 1383:
case 189:
case 1931:
case 715:
case 3353:
case 133:
case 1080:
case 101:
case 1707:
case 3405:
case 3604:
case 2493:
case 3881:
case 2408:
case 2904:
case 1965:
case 1716:
case 649:
case 841:
case 3496:
case 2996:
case 669:
case 1216:
case 519:
case 3696:
case 2063:
case 1871:
case 376:
case 2792:
case 3070:
case 1820:
case 3609:
case 2189:
case 2292:
case 326:
case 1912:
case 717:
case 3409:
case 2360:
case 2840:
case 3798:
case 4050:
case 866:
case 2795:
case 1914:
case 2294:
case 1618:
case 2295:
case 2794:
case 2521:
case 321:
case 2570:
case 1750:
case 2310:
case 3481:
case 1651:
case 2808:
case 3681:
case 3804:
case 2101:
case 3780:
case 1135:
case 4066:
case 2182:
case 3324:
case 3143:
case 1517:
case 1595:
case 809:
case 4021:
case 1348:
case 476:
case 1161:
case 56:
case 3402:
case 426:
case 1594:
case 881:
case 1919:
case 3896:
case 1721:
case 979:
case 2206:
case 1620:
case 1770:
case 2550:
case 2440:
case 2706:
case 578:
case 3940:
case 1471:
case 1221:
case 2741:
case 815:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1773255601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,];
var gg_b = "1773255601/";

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
