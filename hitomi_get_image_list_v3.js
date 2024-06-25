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
case 4029:
case 1110:
case 21:
case 3409:
case 3991:
case 962:
case 1361:
case 2740:
case 157:
case 54:
case 3632:
case 2268:
case 978:
case 3424:
case 861:
case 4041:
case 2607:
case 1455:
case 1405:
case 2595:
case 839:
case 631:
case 3572:
case 804:
case 1201:
case 394:
case 3434:
case 2367:
case 1143:
case 3224:
case 1239:
case 1761:
case 17:
case 2:
case 1176:
case 3157:
case 3685:
case 2273:
case 2510:
case 2640:
case 244:
case 3969:
case 2164:
case 838:
case 855:
case 1928:
case 3823:
case 2649:
case 3844:
case 618:
case 1070:
case 1567:
case 1796:
case 2189:
case 1599:
case 479:
case 429:
case 1887:
case 2995:
case 2293:
case 3000:
case 3888:
case 2576:
case 152:
case 1832:
case 1866:
case 949:
case 3326:
case 1670:
case 885:
case 1090:
case 3252:
case 2582:
case 3462:
case 10:
case 1694:
case 13:
case 3371:
case 2428:
case 199:
case 232:
case 1947:
case 3296:
case 1039:
case 583:
case 3620:
case 3136:
case 3530:
case 101:
case 3640:
case 4066:
case 330:
case 2230:
case 3676:
case 2457:
case 1452:
case 55:
case 172:
case 1479:
case 3921:
case 1339:
case 1998:
case 2194:
case 2579:
case 1673:
case 3757:
case 1800:
case 3315:
case 2729:
case 2129:
case 2538:
case 3284:
case 326:
case 1677:
case 451:
case 2776:
case 1711:
case 2242:
case 1578:
case 1150:
case 3544:
case 1856:
case 2028:
case 1126:
case 913:
case 3265:
case 3700:
case 3291:
case 673:
case 3251:
case 1550:
case 1327:
case 2235:
case 1595:
case 3767:
case 3683:
case 1847:
case 3438:
case 1138:
case 3206:
case 304:
case 1886:
case 144:
case 559:
case 3182:
case 3918:
case 1426:
case 3810:
case 3004:
case 1483:
case 925:
case 2756:
case 550:
case 240:
case 3903:
case 2787:
case 540:
case 2267:
case 2527:
case 1846:
case 2395:
case 3748:
case 1396:
case 2111:
case 1487:
case 3982:
case 1555:
case 3104:
case 4035:
case 2175:
case 2646:
case 2965:
case 156:
case 789:
case 1308:
case 2434:
case 308:
case 3787:
case 620:
case 904:
case 3086:
case 3102:
case 4072:
case 1442:
case 2511:
case 3877:
case 3344:
case 1920:
case 1999:
case 3583:
case 1180:
case 1388:
case 260:
case 3904:
case 2951:
case 3824:
case 1304:
case 2009:
case 2586:
case 2136:
case 2205:
case 3935:
case 482:
case 1505:
case 1997:
case 3471:
case 2192:
case 2714:
case 1789:
case 1190:
case 1413:
case 3672:
case 464:
case 3963:
case 1717:
case 3729:
case 822:
case 1929:
case 2485:
case 2914:
case 980:
case 3939:
case 1696:
case 4039:
case 1573:
case 1558:
case 1243:
case 1795:
case 2091:
case 2790:
case 3140:
case 981:
case 3081:
case 2414:
case 1577:
case 585:
case 135:
case 2166:
case 1402:
case 2569:
case 753:
case 3046:
case 1032:
case 2449:
case 2003:
case 1075:
case 869:
case 2973:
case 2738:
case 3965:
case 213:
case 1199:
case 1210:
case 2098:
case 1276:
case 3092:
case 867:
case 932:
case 934:
case 1334:
case 1985:
case 1433:
case 447:
case 1262:
case 2721:
case 3811:
case 1949:
case 628:
case 3948:
case 533:
case 652:
case 1687:
case 3106:
case 2923:
case 2114:
case 1697:
case 36:
case 1027:
case 1594:
case 1316:
case 1147:
case 3443:
case 517:
case 287:
case 1481:
case 2701:
case 3487:
case 2151:
case 960:
case 1755:
case 1084:
case 965:
case 2420:
case 28:
case 2200:
case 1086:
case 466:
case 3599:
case 257:
case 3075:
case 886:
case 909:
case 1392:
case 2835:
case 3861:
case 2130:
case 267:
case 159:
case 2642:
case 679:
case 3627:
case 3714:
case 744:
case 3731:
case 2975:
case 3338:
case 2244:
case 1857:
case 2620:
case 3400:
case 3577:
case 1063:
case 726:
case 1036:
case 2026:
case 2195:
case 3605:
case 1130:
case 748:
case 971:
case 2191:
case 3693:
case 361:
case 1762:
case 1296:
case 3120:
case 1194:
case 1986:
case 657:
case 283:
case 2581:
case 1775:
case 3314:
case 2725:
case 1178:
case 2219:
case 2305:
case 3114:
case 358:
case 851:
case 979:
case 3679:
case 3728:
case 1424:
case 3776:
case 4040:
case 3580:
case 2684:
case 1050:
case 3221:
case 2107:
case 712:
case 3329:
case 117:
case 3950:
case 747:
case 1:
case 445:
case 1382:
case 2616:
case 1982:
case 2328:
case 65:
case 2412:
case 1478:
case 3414:
case 1672:
case 3895:
case 3924:
case 2035:
case 3582:
case 796:
case 1410:
case 733:
case 3270:
case 2514:
case 1219:
case 285:
case 2165:
case 1439:
case 3509:
case 1557:
case 334:
case 3879:
case 810:
case 486:
case 3515:
case 3763:
case 834:
case 294:
case 1438:
case 666:
case 1964:
case 3553:
case 1993:
case 3751:
case 2537:
case 2214:
case 2206:
case 2872:
case 2355:
case 1058:
case 3816:
case 3535:
case 1725:
case 2515:
case 346:
case 3007:
case 33:
case 2889:
case 1879:
case 2016:
case 2386:
case 3214:
case 1720:
case 2956:
case 1668:
case 1427:
case 3274:
case 3328:
case 2700:
case 3929:
case 2568:
case 1031:
case 1801:
case 3139:
case 1912:
case 1408:
case 292:
case 764:
case 170:
case 468:
case 547:
case 2124:
case 2321:
case 1939:
case 396:
case 2331:
case 392:
case 2409:
case 2049:
case 3985:
case 3902:
case 2448:
case 916:
case 2655:
case 3834:
case 3045:
case 2799:
case 1631:
case 3726:
case 1022:
case 2501:
case 3357:
case 1682:
case 284:
case 3721:
case 1716:
case 1635:
case 3980:
case 3709:
case 2691:
case 2330:
case 3900:
case 2989:
case 1269:
case 4068:
case 3859:
case 3618:
case 95:
case 725:
case 875:
case 2517:
case 2997:
case 430:
case 989:
case 555:
case 2484:
case 577:
case 1257:
case 463:
case 1163:
case 3937:
case 3800:
case 2014:
case 1839:
case 626:
case 2654:
case 1459:
case 2297:
case 2530:
case 1432:
case 3545:
case 2456:
case 3311:
case 1081:
case 2770:
case 2954:
case 2717:
case 2599:
case 2937:
case 3925:
case 2645:
case 2765:
case 140:
case 2974:
case 3203:
case 3138:
case 2311:
case 3399:
case 644:
case 94:
case 3398:
case 18:
case 9:
case 571:
case 944:
case 3219:
case 2910:
case 587:
case 572:
case 900:
case 1404:
case 2991:
case 3538:
case 3331:
case 782:
case 2847:
case 2190:
case 85:
case 3063:
case 2603:
case 2757:
case 1812:
case 787:
case 2218:
case 2591:
case 3133:
case 3166:
case 2672:
case 2592:
case 1881:
case 1814:
case 623:
case 3156:
case 3200:
case 3319:
case 2290:
case 323:
case 2211:
case 2445:
case 1651:
case 1806:
case 3905:
case 3347:
case 2525:
case 3838:
case 1833:
case 1056:
case 1168:
case 3132:
case 3191:
case 3942:
case 2502:
case 1813:
case 3054:
case 4051:
case 2188:
case 3606:
case 1688:
case 1142:
case 659:
case 2132:
case 2363:
case 2010:
case 812:
case 2418:
case 2030:
case 3130:
case 2597:
case 1908:
case 1116:
case 1556:
case 3453:
case 1904:
case 1431:
case 1689:
case 3674:
case 119:
case 3262:
case 2089:
case 1569:
case 2704:
case 1971:
case 4078:
case 923:
case 2928:
case 3649:
case 2743:
case 800:
case 3379:
case 2346:
case 1617:
case 1626:
case 3706:
case 1508:
case 2171:
case 3154:
case 270:
case 946:
case 667:
case 1232:
case 3933:
case 442:
case 331:
case 1002:
case 2097:
case 915:
case 2411:
case 4009:
case 2768:
case 1196:
case 2398:
case 1153:
case 2335:
case 1462:
case 647:
case 2673:
case 3923:
case 3777:
case 1785:
case 3486:
case 2879:
case 814:
case 1787:
case 993:
case 1386:
case 1526:
case 880:
case 3628:
case 3184:
case 3147:
case 1332:
case 1513:
case 2033:
case 2380:
case 3085:
case 2483:
case 1638:
case 332:
case 2818:
case 2196:
case 4092:
case 81:
case 662:
case 476:
case 2197:
case 1265:
case 1853:
case 1542:
case 1114:
case 3518:
case 3181:
case 1933:
case 3962:
case 153:
case 3600:
case 1477:
case 4058:
case 2054:
case 195:
case 2322:
case 2173:
case 1083:
case 250:
case 1521:
case 760:
case 1293:
case 1186:
case 1875:
case 2919:
case 2539:
case 3290:
case 1700:
case 3382:
case 3887:
case 3454:
case 53:
case 2470:
case 2093:
case 806:
case 3020:
case 780:
case 125:
case 3986:
case 2471:
case 1475:
case 2682:
case 1493:
case 3068:
case 1217:
case 2339:
case 2561:
case 2737:
case 2202:
case 2606:
case 340:
case 3213:
case 71:
case 799:
case 2332:
case 1809:
case 2998:
case 2137:
case 4002:
case 761:
case 342:
case 1722:
case 1869:
case 2213:
case 1527:
case 2337:
case 938:
case 1781:
case 2786:
case 3493:
case 575:
case 2724:
case 1822:
case 3876:
case 2294:
case 47:
case 2401:
case 2051:
case 612:
case 4088:
case 2916:
case 2922:
case 190:
case 3250:
case 275:
case 3531:
case 1139:
case 1290:
case 3142:
case 3412:
case 2968:
case 763:
case 1120:
case 2688:
case 716:
case 82:
case 345:
case 565:
case 3383:
case 2842:
case 2651:
case 2354:
case 1683:
case 127:
case 3813:
case 3034:
case 192:
case 2978:
case 402:
case 1278:
case 3451:
case 2849:
case 385:
case 2099:
case 2144:
case 3907:
case 2073:
case 1531:
case 3974:
case 1630:
case 2264:
case 181:
case 592:
case 2832:
case 348:
case 49:
case 3931:
case 1919:
case 1864:
case 3001:
case 3550:
case 1731:
case 1111:
case 1351:
case 2232:
case 778:
case 2283:
case 3312:
case 3161:
case 2494:
case 1158:
case 1417:
case 3089:
case 1790:
case 2500:
case 2499:
case 72:
case 2608:
case 2333:
case 2068:
case 609:
case 3989:
case 2831:
case 2513:
case 2652:
case 2496:
case 1552:
case 1629:
case 221:
case 1496:
case 1627:
case 3998:
case 1233:
case 1784:
case 3015:
case 1437:
case 77:
case 1900:
case 3096:
case 594:
case 1177:
case 3303:
case 386:
case 3922:
case 3593:
case 984:
case 2780:
case 551:
case 2912:
case 3426:
case 1441:
case 982:
case 4012:
case 1992:
case 1938:
case 942:
case 450:
case 3601:
case 2784:
case 6:
case 917:
case 998:
case 1506:
case 1640:
case 4049:
case 1901:
case 3240:
case 2038:
case 2583:
case 469:
case 2338:
case 512:
case 1359:
case 3055:
case 3448:
case 63:
case 783:
case 343:
case 1492:
case 3957:
case 2460:
case 1962:
case 1348:
case 3643:
case 3645:
case 3717:
case 826:
case 1364:
case 3297:
case 586:
case 2819:
case 2229:
case 389:
case 2472:
case 1357:
case 3914:
case 3675:
case 1451:
case 3684:
case 142:
case 289:
case 87:
case 1146:
case 1253:
case 50:
case 3745:
case 247:
case 3135:
case 3128:
case 1621:
case 1244:
case 940:
case 1100:
case 1380:
case 1922:
case 60:
case 1246:
case 936:
case 372:
case 3725:
case 795:
case 2664:
case 301:
case 2823:
case 3192:
case 415:
case 1877:
case 2523:
case 3393:
case 2183:
case 2041:
case 1220:
case 1222:
case 2596:
case 3362:
case 2074:
case 3837:
case 1870:
case 2553:
case 3494:
case 1495:
case 1841:
case 1517:
case 2957:
case 1127:
case 3489:
case 1692:
case 3198:
case 456:
case 3215:
case 197:
case 457:
case 436:
case 1602:
case 3581:
case 2966:
case 4061:
case 1060:
case 3239:
case 3129:
case 2024:
case 1715:
case 1799:
case 2050:
case 1708:
case 1299:
case 1628:
case 3238:
case 1187:
case 3532:
case 2906:
case 3919:
case 1884:
case 1597:
case 2864:
case 355:
case 188:
case 2990:
case 2106:
case 8:
case 223:
case 1957:
case 677:
case 3153:
case 2037:
case 3406:
case 3437:
case 608:
case 354:
case 1910:
case 3820:
case 471:
case 2170:
case 4062:
case 809:
case 627:
case 2902:
case 3874:
case 970:
case 1051:
case 2820:
case 1473:
case 423:
case 729:
case 1043:
case 3983:
case 833:
case 3071:
case 616:
case 2284:
case 1574:
case 282:
case 619:
case 2309:
case 1951:
case 93:
case 2443:
case 2552:
case 2225:
case 1094:
case 166:
case 3781:
case 3664:
case 178:
case 2742:
case 3867:
case 3943:
case 2946:
case 4008:
case 2745:
case 2005:
case 537:
case 3084:
case 722:
case 527:
case 2405:
case 3343:
case 3554:
case 2104:
case 707:
case 786:
case 3243:
case 1013:
case 66:
case 3266:
case 11:
case 1511:
case 3977:
case 272:
case 4028:
case 2397:
case 3917:
case 3185:
case 3910:
case 1845:
case 1343:
case 3077:
case 1918:
case 951:
case 2334:
case 3031:
case 3949:
case 3786:
case 3229:
case 3524:
case 2482:
case 1001:
case 1872:
case 132:
case 477:
case 1275:
case 3078:
case 2617:
case 1302:
case 1810:
case 606:
case 64:
case 2179:
case 1123:
case 687:
case 293:
case 1587:
case 1871:
case 3419:
case 972:
case 3082:
case 1059:
case 3100:
case 1758:
case 3390:
case 3564:
case 3167:
case 1944:
case 554:
case 3150:
case 2609:
case 2152:
case 850:
case 2550:
case 3124:
case 3682:
case 1320:
case 1140:
case 3235:
case 41:
case 2145:
case 905:
case 3872:
case 1248:
case 187:
case 32:
case 3421:
case 774:
case 2017:
case 977:
case 3769:
case 2452:
case 1835:
case 1588:
case 1258:
case 1174:
case 2570:
case 2389:
case 2156:
case 3263:
case 2734:
case 4050:
case 954:
case 4076:
case 597:
case 42:
case 3087:
case 3351:
case 1421:
case 3354:
case 3973:
case 2158:
case 841:
case 3909:
case 3146:
case 4090:
case 1216:
case 1376:
case 3511:
case 704:
case 83:
case 1969:
case 2425:
case 860:
case 3306:
case 2955:
case 2758:
case 1046:
case 742:
case 295:
case 1632:
case 2295:
case 426:
case 1498:
case 3981:
case 2678:
case 1113:
case 3955:
case 1330:
case 2805:
case 123:
case 4030:
case 1024:
case 749:
case 4015:
case 2372:
case 2048:
case 3616:
case 2698:
case 2272:
case 563:
case 2135:
case 3718:
case 2193:
case 58:
case 701:
case 387:
case 3750:
case 4054:
case 2614:
case 1457:
case 1020:
case 48:
case 480:
case 2222:
case 868:
case 4057:
case 3322:
case 568:
case 897:
case 2031:
case 1395:
case 1312:
case 1468:
case 1098:
case 1374:
case 138:
case 2450:
case 3401:
case 3220:
case 4074:
case 2824:
case 2877:
case 528:
case 2624:
case 488:
case 1288:
case 2657:
case 1315:
case 1703:
case 3735:
case 1237:
case 3321:
case 3615:
case 2522:
case 832:
case 316:
case 3608:
case 803:
case 324:
case 2540:
case 380:
case 341:
case 3536:
case 2203:
case 848:
case 815:
case 1854:
case 3987:
case 74:
case 1203:
case 2666:
case 3866:
case 258:
case 3279:
case 881:
case 2888:
case 683:
case 1400:
case 1454:
case 3320:
case 2081:
case 2508:
case 86:
case 1586:
case 2257:
case 3110:
case 279:
case 505:
case 3607:
case 3528:
case 1074:
case 605:
case 453:
case 685:
case 698:
case 1738:
case 1695:
case 3152:
case 1598:
case 318:
case 1956:
case 3738:
case 767:
case 1546:
case 3660:
case 3280:
case 2627:
case 217:
case 198:
case 502:
case 1885:
case 2984:
case 3812:
case 1423:
case 3336:
case 2233:
case 3299:
case 1777:
case 2441:
case 2731:
case 164:
case 3638:
case 2102:
case 874:
case 857:
case 3970:
case 1429:
case 3062:
case 1769:
case 224:
case 1466:
case 622:
case 852:
case 339:
case 255:
case 2241:
case 1729:
case 1259:
case 2371:
case 3716:
case 3765:
case 421:
case 3141:
case 1851:
case 3056:
case 1107:
case 383:
case 1609:
case 2271:
case 3446:
case 2274:
case 1829:
case 1347:
case 2053:
case 2055:
case 1570:
case 1830:
case 231:
case 3862:
case 3242:
case 3994:
case 959:
case 186:
case 1770:
case 196:
case 3546:
case 347:
case 1104:
case 1349:
case 3470:
case 2459:
case 3247:
case 1215:
case 377:
case 2548:
case 693:
case 3394:
case 3520:
case 2862:
case 4075:
case 189:
case 3829:
case 163:
case 2855:
case 1693:
case 1313:
case 462:
case 3051:
case 4025:
case 3819:
case 1743:
case 3127:
case 495:
case 1643:
case 366:
case 2182:
case 3881:
case 1836:
case 438:
case 2865:
case 449:
case 1863:
case 492:
case 3916:
case 3023:
case 884:
case 3940:
case 3764:
case 262:
case 299:
case 2004:
case 921:
case 465:
case 384:
case 1691:
case 700:
case 1699:
case 3397:
case 193:
case 773:
case 3930:
case 648:
case 2336:
case 2123:
case 2215:
case 2699:
case 1824:
case 2822:
case 1133:
case 1192:
case 4024:
case 2712:
case 3655:
case 2021:
case 3624:
case 3766:
case 1184:
case 3704:
case 2256:
case 3928:
case 2201:
case 1656:
case 3633:
case 985:
case 2096:
case 2292:
case 3913:
case 3169:
case 1157:
case 133:
case 2806:
case 338:
case 1782:
case 3968:
case 4085:
case 1105:
case 715:
case 107:
case 2566:
case 1934:
case 1054:
case 2116:
case 2347:
case 1948:
case 3612:
case 675:
case 3755:
case 3617:
case 3341:
case 2727:
case 1121:
case 3370:
case 3613:
case 3430:
case 2936:
case 578:
case 3678:
case 286:
case 3927:
case 3163:
case 3543:
case 706:
case 3207:
case 2023:
case 2083:
case 1894:
case 3005:
case 2167:
case 2876:
case 697:
case 328:
case 4043:
case 2131:
case 360:
case 2422:
case 2833:
case 2967:
case 1671:
case 3896:
case 2180:
case 2349:
case 1298:
case 1446:
case 3042:
case 2032:
case 2521:
case 678:
case 246:
case 3395:
case 230:
case 3579:
case 2487:
case 1241:
case 956:
case 891:
case 3890:
case 919:
case 1066:
case 3658:
case 600:
case 1164:
case 610:
case 1109:
case 306:
case 4046:
case 3080:
case 2178:
case 1590:
case 1642:
case 2240:
case 1676:
case 1510:
case 3944:
case 1981:
case 2344:
case 2816:
case 1461:
case 176:
case 4032:
case 1306:
case 3209:
case 2423:
case 2610:
case 927:
case 97:
case 3846:
case 955:
case 507:
case 664:
case 3793:
case 2524:
case 3869:
case 1256:
case 2670:
case 2066:
case 3038:
case 1033:
case 3784:
case 2626:
case 226:
case 1300:
case 1932:
case 378:
case 2427:
case 3464:
case 2668:
case 2475:
case 1522:
case 639:
case 2686:
case 2002:
case 1774:
case 988:
case 411:
case 4:
case 3586:
case 2763:
case 2868:
case 604:
case 1604:
case 2006:
case 739:
case 794:
case 3234:
case 368:
case 1428:
case 1214:
case 3060:
case 3174:
case 2246:
case 2558:
case 4017:
case 1287:
case 3669:
case 3497:
case 1034:
case 403:
case 3425:
case 3365:
case 3642:
case 642:
case 379:
case 3517:
case 273:
case 2400:
case 3258:
case 2308:
case 2012:
case 1418:
case 2959:
case 3202:
case 1937:
case 2720:
case 1183:
case 1515:
case 271:
case 2118:
case 2210:
case 3827:
case 1181:
case 1960:
case 145:
case 3871:
case 3853:
case 3596:
case 444:
case 3323:
case 3768:
case 245:
case 1091:
case 862:
case 70:
case 887:
case 1923:
case 3901:
case 3794:
case 2593:
case 823:
case 146:
case 2994:
case 467:
case 2385:
case 4060:
case 933:
case 2713:
case 3574:
case 2829:
case 3358:
case 1639:
case 654:
case 1792:
case 3119:
case 3860:
case 1263:
case 1028:
case 1559:
case 1612:
case 781:
case 2636:
case 212:
case 902:
case 1895:
case 2269:
case 322:
case 1381:
case 1702:
case 2796:
case 3739:
case 1134:
case 2598:
case 728:
case 3703:
case 556:
case 34:
case 3180:
case 3485:
case 1328:
case 26:
case 682:
case 3614:
case 2940:
case 2464:
case 1092:
case 1844:
case 3595:
case 751:
case 3377:
case 1958:
case 2977:
case 1582:
case 3024:
case 1563:
case 709:
case 1254:
case 2961:
case 1616:
case 2212:
case 708:
case 2199:
case 3033:
case 1955:
case 329:
case 202:
case 1448:
case 3832:
case 3294:
case 2748:
case 1014:
case 2168:
case 3629:
case 2891:
case 3334:
case 3783:
case 1744:
case 2628:
case 1503:
case 3228:
case 3525:
case 2925:
case 2827:
case 2177:
case 2057:
case 1780:
case 1414:
case 2312:
case 953:
case 1659:
case 431:
case 1803:
case 2590:
case 1250:
case 827:
case 1467:
case 4073:
case 3997:
case 80:
case 23:
case 2702:
case 433:
case 162:
case 3256:
case 1057:
case 3403:
case 1292:
case 1311:
case 2639:
case 640:
case 2789:
case 3277:
case 1739:
case 958:
case 478:
case 3026:
case 1779:
case 154:
case 651:
case 2160:
case 3722:
case 264:
case 2481:
case 3534:
case 1848:
case 1756:
case 1185:
case 879:
case 914:
case 3483:
case 1685:
case 2001:
case 2019:
case 439:
case 1965:
case 2163:
case 1532:
case 1342:
case 4067:
case 3108:
case 2082:
case 2634:
case 1071:
case 561:
case 3490:
case 735:
case 2632:
case 1988:
case 3223:
case 3591:
case 1679:
case 3210:
case 2665:
case 2103:
case 2357:
case 3158:
case 3619:
case 820:
case 935:
case 3863:
case 757:
case 2993:
case 508:
case 1980:
case 3463:
case 237:
case 595:
case 1726:
case 3806:
case 67:
case 3313:
case 2903:
case 2368:
case 3170:
case 1407:
case 3217:
case 89:
case 185:
case 27:
case 3695:
case 680:
case 374:
case 3912:
case 2813:
case 3385:
case 3070:
case 2162:
case 3662:
case 3455:
case 3609:
case 2426:
case 2064:
case 473:
case 2535:
case 2476:
case 3686:
case 3761:
case 1592:
case 3533:
case 952:
case 400:
case 303:
case 957:
case 1131:
case 710:
case 3293:
case 2808:
case 1200:
case 3190:
case 975:
case 3125:
case 2044:
case 1345:
case 1878:
case 1161:
case 2528:
case 274:
case 2105:
case 732:
case 3557:
case 177:
case 2402:
case 259:
case 1798:
case 2092:
case 3555:
case 1858:
case 1270:
case 3442:
case 3348:
case 1876:
case 210:
case 4027:
case 1078:
case 3875:
case 1125:
case 4063:
case 532:
case 1336:
case 317:
case 1277:
case 2302:
case 890:
case 2301:
case 720:
case 2637:
case 1783:
case 717:
case 3476:
case 2898:
case 1049:
case 184:
case 1226:
case 3272:
case 2976:
case 1099:
case 878:
case 1649:
case 3364:
case 948:
case 2971:
case 1420:
case 699:
case 1893:
case 3697:
case 1867:
case 3155:
case 3352:
case 2950:
case 570:
case 745:
case 2090:
case 3780:
case 1329:
case 3011:
case 409:
case 3376:
case 1038:
case 2415:
case 3260:
case 1915:
case 3248:
case 2046:
case 2963:
case 1974:
case 3143:
case 2863:
case 2762:
case 2584:
case 1160:
case 3022:
case 2254:
case 2369:
case 847:
case 2633:
case 590:
case 4019:
case 3839:
case 1490:
case 918:
case 3712:
case 1921:
case 1972:
case 3993:
case 762:
case 1825:
case 367:
case 1750:
case 1548:
case 2909:
case 772:
case 2794:
case 1444:
case 2825:
case 2360:
case 1193:
case 1880:
case 3440:
case 1284:
case 2306:
case 2509:
case 2261:
case 1280:
case 4087:
case 3857:
case 3330:
case 525:
case 3187:
case 2245:
case 1230:
case 2812:
case 1773:
case 4070:
case 3469:
case 1614:
case 1325:
case 2764:
case 1930:
case 3701:
case 2747:
case 3653:
case 3495:
case 3512:
case 3103:
case 3122:
case 2207:
case 2749:
case 3159:
case 777:
case 106:
case 849:
case 1745:
case 211:
case 235:
case 4056:
case 1658:
case 1712:
case 242:
case 2852:
case 1615:
case 39:
case 2882:
case 2512:
case 3373:
case 1115:
case 3309:
case 3631:
case 3415:
case 2153:
case 3788:
case 813:
case 139:
case 3947:
case 669:
case 2715:
case 2942:
case 560:
case 7:
case 131:
case 3809:
case 90:
case 991:
case 858:
case 1601:
case 3460:
case 996:
case 1652:
case 1389:
case 3431:
case 1326:
case 2557:
case 1384:
case 684:
case 1719:
case 1144:
case 676:
case 1541:
case 2440:
case 3231:
case 1152:
case 1391:
case 2486:
case 1967:
case 3807:
case 646:
case 2667:
case 1927:
case 2788:
case 2079:
case 986:
case 3996:
case 2551:
case 3818:
case 3873:
case 315:
case 3429:
case 3368:
case 147:
case 1553:
case 2080:
case 1794:
case 76:
case 818:
case 3208:
case 1502:
case 497:
case 2018:
case 3995:
case 1906:
case 4084:
case 2072:
case 59:
case 116:
case 3558:
case 1576:
case 1469:
case 3972:
case 2122:
case 3173:
case 643:
case 3017:
case 487:
case 835:
case 3144:
case 109:
case 1791:
case 1899:
case 168:
case 3307:
case 2962:
case 1171:
case 2221:
case 3275:
case 134:
case 173:
case 895:
case 3508:
case 2216:
case 2735:
case 1082:
case 831:
case 2987:
case 853:
case 1154:
case 43:
case 1137:
case 2621:
case 52:
case 2564:
case 395:
case 2669:
case 470:
case 2656:
case 388:
case 1223:
case 3283:
case 703:
case 359:
case 1409:
case 96:
case 3268:
case 2453:
case 44:
case 3003:
case 278:
case 167:
case 3099:
case 1608:
case 3472:
case 1581:
case 1507:
case 3835:
case 2348:
case 2404:
case 3456:
case 1936:
case 2303:
case 3267:
case 3053:
case 4026:
case 3789:
case 3504:
case 1827:
case 2324:
case 738:
case 3269:
case 2896:
case 1458:
case 649:
case 155:
case 3197:
case 3318:
case 2341:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1719298802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,];
var gg_b = "1719298802/";

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
