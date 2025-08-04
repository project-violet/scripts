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
case 3056:
case 1676:
case 3359:
case 1517:
case 2747:
case 3947:
case 1139:
case 698:
case 1136:
case 3566:
case 4052:
case 3876:
case 4083:
case 3059:
case 1394:
case 3816:
case 3065:
case 1613:
case 1690:
case 3437:
case 1673:
case 384:
case 586:
case 4086:
case 619:
case 860:
case 2810:
case 3890:
case 3365:
case 1133:
case 1271:
case 2560:
case 2207:
case 551:
case 2870:
case 4066:
case 2937:
case 3737:
case 3385:
case 2580:
case 3362:
case 1748:
case 2868:
case 3085:
case 198:
case 41:
case 119:
case 2447:
case 3586:
case 1121:
case 442:
case 4063:
case 664:
case 3824:
case 696:
case 1935:
case 2703:
case 303:
case 3700:
case 2324:
case 2249:
case 1202:
case 3629:
case 333:
case 854:
case 2024:
case 712:
case 3527:
case 938:
case 1445:
case 2144:
case 56:
case 3481:
case 3221:
case 39:
case 704:
case 2641:
case 2709:
case 3592:
case 2243:
case 3623:
case 2620:
case 2515:
case 77:
case 24:
case 3310:
case 2313:
case 3370:
case 721:
case 906:
case 2882:
case 4027:
case 3393:
case 2981:
case 3595:
case 3093:
case 2409:
case 2073:
case 3070:
case 3461:
case 453:
case 3236:
case 910:
case 2376:
case 3099:
case 2403:
case 1354:
case 2079:
case 3396:
case 3134:
case 4092:
case 2019:
case 2191:
case 2859:
case 3171:
case 3614:
case 212:
case 2379:
case 1205:
case 3674:
case 3111:
case 529:
case 1337:
case 736:
case 3048:
case 3260:
case 1809:
case 3507:
case 710:
case 36:
case 1785:
case 3157:
case 3741:
case 2941:
case 1482:
case 1806:
case 2164:
case 3348:
case 97:
case 1465:
case 3609:
case 238:
case 18:
case 1453:
case 1222:
case 3923:
case 2723:
case 921:
case 706:
case 3720:
case 2920:
case 887:
case 503:
case 489:
case 2600:
case 835:
case 1459:
case 3929:
case 3835:
case 2474:
case 805:
case 3128:
case 533:
case 1297:
case 2414:
case 3201:
case 1115:
case 1759:
case 2731:
case 1172:
case 2429:
case 1112:
case 68:
case 912:
case 858:
case 1544:
case 4007:
case 2338:
case 2774:
case 1462:
case 2298:
case 2184:
case 3278:
case 255:
case 236:
case 1225:
case 2681:
case 1950:
case 1753:
case 2252:
case 206:
case 2423:
case 3280:
case 1782:
case 1765:
case 2845:
case 3212:
case 1710:
case 1468:
case 3543:
case 1990:
case 1770:
case 166:
case 1973:
case 3272:
case 1081:
case 2521:
case 2258:
case 259:
case 3754:
case 3546:
case 862:
case 1976:
case 424:
case 1178:
case 2227:
case 1916:
case 668:
case 2332:
case 1919:
case 1799:
case 1847:
case 3549:
case 3967:
case 2767:
case 1979:
case 1160:
case 3530:
case 2533:
case 3454:
case 2787:
case 1924:
case 1000:
case 2467:
case 3122:
case 1499:
case 4043:
case 485:
case 983:
case 431:
case 1493:
case 1768:
case 1061:
case 2637:
case 1470:
case 3804:
case 388:
case 2536:
case 2177:
case 1228:
case 3197:
case 2539:
case 1604:
case 168:
case 1589:
case 1824:
case 263:
case 2326:
case 2438:
case 2143:
case 2029:
case 1687:
case 2244:
case 211:
case 2026:
case 875:
case 319:
case 3208:
case 3121:
case 2704:
case 3904:
case 2323:
case 398:
case 748:
case 4077:
case 2146:
case 568:
case 2948:
case 722:
case 1085:
case 3041:
case 1385:
case 1583:
case 90:
case 1362:
case 2668:
case 246:
case 2023:
case 2130:
case 1890:
case 1563:
case 2291:
case 2404:
case 594:
case 3211:
case 1353:
case 778:
case 248:
case 1813:
case 3690:
case 1053:
case 2693:
case 276:
case 746:
case 2670:
case 2522:
case 184:
case 566:
case 1082:
case 974:
case 3234:
case 1065:
case 3613:
case 880:
case 2374:
case 2031:
case 2699:
case 3679:
case 3394:
case 3938:
case 2854:
case 3619:
case 2597:
case 3139:
case 1947:
case 3867:
case 1879:
case 2014:
case 717:
case 3616:
case 2696:
case 1359:
case 3676:
case 625:
case 3054:
case 1096:
case 849:
case 1399:
case 1674:
case 629:
case 441:
case 2557:
case 1171:
case 3564:
case 3874:
case 2067:
case 3814:
case 416:
case 603:
case 2682:
case 2665:
case 1236:
case 1010:
case 1093:
case 3650:
case 430:
case 1388:
case 1461:
case 1088:
case 400:
case 1393:
case 3745:
case 2945:
case 1595:
case 2251:
case 1909:
case 2942:
case 1068:
case 1240:
case 1761:
case 1623:
case 1558:
case 19:
case 2662:
case 1221:
case 3823:
case 1108:
case 2820:
case 1906:
case 891:
case 3829:
case 477:
case 2087:
case 879:
case 1626:
case 1629:
case 2387:
case 1280:
case 2982:
case 3782:
case 2965:
case 3950:
case 1420:
case 3225:
case 2645:
case 2127:
case 1441:
case 2956:
case 3544:
case 1974:
case 3632:
case 3112:
case 3172:
case 2192:
case 1128:
case 2800:
case 861:
case 3297:
case 1201:
case 1835:
case 1494:
case 3456:
case 550:
case 867:
case 3175:
case 515:
case 1926:
case 1603:
case 1929:
case 2642:
case 38:
case 2450:
case 3037:
case 1720:
case 3482:
case 1348:
case 2534:
case 1260:
case 1048:
case 4044:
case 16:
case 2962:
case 3785:
case 2861:
case 1741:
case 1157:
case 1606:
case 3361:
case 1275:
case 2006:
case 1342:
case 2309:
case 2648:
case 3101:
case 1215:
case 20:
case 774:
case 2169:
case 244:
case 3228:
case 2837:
case 1197:
case 3551:
case 1804:
case 188:
case 23:
case 2009:
case 1042:
case 978:
case 3493:
case 3061:
case 2473:
case 3470:
case 917:
case 2003:
case 1122:
case 3000:
case 911:
case 2479:
case 1987:
case 1454:
case 519:
case 3924:
case 686:
case 2724:
case 651:
case 3257:
case 2163:
case 3160:
case 1530:
case 720:
case 1549:
case 3847:
case 343:
case 2779:
case 2152:
case 2183:
case 3180:
case 2284:
case 3178:
case 3916:
case 3796:
case 3118:
case 2996:
case 2424:
case 4051:
case 1125:
case 70:
case 157:
case 186:
case 151:
case 3788:
case 564:
case 3081:
case 3468:
case 2993:
case 3973:
case 366:
case 2189:
case 73:
case 2713:
case 3710:
case 1733:
case 1686:
case 679:
case 3889:
case 4090:
case 2327:
case 4019:
case 1652:
case 1440:
case 2568:
case 4079:
case 1736:
case 149:
case 2147:
case 3951:
case 2751:
case 1739:
case 2058:
case 3312:
case 1421:
case 412:
case 4016:
case 3245:
case 3372:
case 2625:
case 3883:
case 2880:
case 3315:
case 587:
case 3855:
case 3513:
case 556:
case 1328:
case 2570:
case 1261:
case 2395:
case 3242:
case 2860:
case 1655:
case 2095:
case 505:
case 3075:
case 2588:
case 179:
case 1663:
case 3405:
case 649:
case 1946:
case 47:
case 89:
case 3677:
case 2697:
case 1669:
case 1666:
case 2235:
case 2599:
case 3137:
case 3702:
case 1200:
case 753:
case 2109:
case 3161:
case 940:
case 3301:
case 3664:
case 2066:
case 2366:
case 2908:
case 1097:
case 2106:
case 2628:
case 175:
case 3471:
case 772:
case 2063:
case 937:
case 2055:
case 931:
case 483:
case 3411:
case 509:
case 985:
case 1322:
case 901:
case 726:
case 1022:
case 539:
case 3100:
case 3550:
case 2553:
case 2355:
case 3360:
case 3895:
case 907:
case 2875:
case 562:
case 728:
case 2812:
case 2911:
case 2585:
case 2872:
case 145:
case 2383:
case 392:
case 3892:
case 1907:
case 2098:
case 2398:
case 3378:
case 2083:
case 3080:
case 1325:
case 1523:
case 226:
case 3858:
case 1692:
case 2386:
case 2238:
case 675:
case 1526:
case 1145:
case 2444:
case 3181:
case 360:
case 2389:
case 71:
case 2086:
case 3728:
case 2928:
case 309:
case 207:
case 2343:
case 201:
case 2126:
case 1775:
case 1472:
case 285:
case 2129:
case 3268:
case 928:
case 942:
case 1002:
case 91:
case 1162:
case 770:
case 2608:
case 2957:
case 1302:
case 2349:
case 2224:
case 65:
case 2046:
case 3535:
case 2330:
case 3333:
case 1165:
case 1153:
case 2279:
case 1305:
case 459:
case 560:
case 2216:
case 270:
case 1927:
case 3457:
case 4032:
case 3194:
case 3288:
case 1475:
case 926:
case 224:
case 707:
case 1415:
case 972:
case 2213:
case 2634:
case 785:
case 3270:
case 1891:
case 3807:
case 2542:
case 1509:
case 182:
case 3293:
case 1199:
case 2839:
case 4038:
case 2307:
case 1371:
case 3265:
case 1034:
case 3282:
case 1983:
case 1778:
case 2007:
case 2548:
case 1334:
case 1071:
case 3154:
case 1196:
case 2925:
case 1011:
case 2477:
case 1630:
case 436:
case 3497:
case 1188:
case 455:
case 667:
case 410:
case 1294:
case 1193:
case 3830:
case 1170:
case 613:
case 1110:
case 1989:
case 3917:
case 1646:
case 3977:
case 3849:
case 1008:
case 2997:
case 3797:
case 4004:
case 1969:
case 438:
case 1649:
case 1480:
case 335:
case 2922:
case 3722:
case 1643:
case 2821:
case 387:
case 554:
case 1241:
case 305:
case 3285:
case 1478:
case 716:
case 1702:
case 2897:
case 3200:
case 1869:
case 3357:
case 1519:
case 3817:
case 730:
case 2064:
case 700:
case 2430:
case 3148:
case 2601:
case 2364:
case 1576:
case 2104:
case 2554:
case 1866:
case 561:
case 3028:
case 379:
case 397:
case 2660:
case 3655:
case 567:
case 741:
case 815:
case 2206:
case 1375:
case 3943:
case 1590:
case 1863:
case 2209:
case 1242:
case 3436:
case 1513:
case 3328:
case 1372:
case 771:
case 349:
case 3739:
case 2939:
case 777:
case 1312:
case 902:
case 2825:
case 3683:
case 2680:
case 1072:
case 1898:
case 3652:
case 914:
case 2384:
case 3689:
case 230:
case 1402:
case 2449:
case 1886:
case 1705:
case 2933:
case 3930:
case 2730:
case 2084:
case 1408:
case 3145:
case 422:
case 1827:
case 476:
case 2672:
case 3523:
case 3692:
case 1318:
case 1734:
case 1378:
case 1080:
case 4031:
case 795:
case 1078:
case 4074:
case 1380:
case 1991:
case 2707:
case 4014:
case 55:
case 3025:
case 1434:
case 2135:
case 1895:
case 2828:
case 1550:
case 660:
case 3322:
case 1411:
case 411:
case 4026:
case 375:
case 2615:
case 1471:
case 1060:
case 3864:
case 898:
case 1708:
case 3397:
case 4023:
case 446:
case 3142:
case 2857:
case 3531:
case 1161:
case 2317:
case 1270:
case 382:
case 2792:
case 3992:
case 1807:
case 2871:
case 1293:
case 1036:
case 3712:
case 2811:
case 1339:
case 1428:
case 2051:
case 3607:
case 162:
case 3415:
case 3506:
case 190:
case 1033:
case 1457:
case 1984:
case 3005:
case 894:
case 3254:
case 2500:
case 3503:
case 3305:
case 866:
case 3165:
case 580:
case 40:
case 1644:
case 662:
case 868:
case 3162:
case 1532:
case 1141:
case 1757:
case 1120:
case 123:
case 3412:
case 873:
case 4003:
case 1268:
case 1040:
case 690:
case 2581:
case 2795:
case 3775:
case 575:
case 265:
case 109:
case 1728:
case 3241:
case 591:
case 269:
case 105:
case 1262:
case 2621:
case 2960:
case 2498:
case 3760:
case 2755:
case 361:
case 2124:
case 579:
case 1425:
case 3220:
case 156:
case 971:
case 313:
case 2640:
case 977:
case 2483:
case 3480:
case 181:
case 918:
case 3649:
case 88:
case 2766:
case 3966:
case 1977:
case 2901:
case 658:
case 1797:
case 3547:
case 1849:
case 2802:
case 714:
case 3969:
case 852:
case 2044:
case 3646:
case 656:
case 687:
case 2466:
case 3110:
case 900:
case 3193:
case 635:
case 2173:
case 681:
case 3170:
case 2274:
case 916:
case 1256:
case 3401:
case 3630:
case 1497:
case 3986:
case 158:
case 2918:
case 1154:
case 3011:
case 1725:
case 4047:
case 2176:
case 3778:
case 2978:
case 2639:
case 2091:
case 2463:
case 3998:
case 2116:
case 2798:
case 947:
case 3034:
case 1265:
case 3371:
case 2636:
case 3983:
case 2391:
case 2980:
case 1422:
case 3311:
case 941:
case 3952:
case 1253:
case 2145:
case 628:
case 3247:
case 876:
case 496:
case 1238:
case 2529:
case 1398:
case 3612:
case 1083:
case 3672:
case 2325:
case 2523:
case 982:
case 1352:
case 1812:
case 2025:
case 775:
case 1585:
case 1872:
case 1791:
case 1098:
case 2658:
case 3707:
case 172:
case 1971:
case 4094:
case 1103:
case 1815:
case 1355:
case 1875:
case 275:
case 395:
case 1628:
case 3615:
case 817:
case 128:
case 1055:
case 419:
case 3077:
case 1366:
case 2514:
case 1908:
case 1069:
case 2574:
case 3594:
case 1556:
case 672:
case 1109:
case 2397:
case 4020:
case 3377:
case 1235:
case 1801:
case 1902:
case 3749:
case 2200:
case 3104:
case 1596:
case 3554:
case 2946:
case 3746:
case 3430:
case 3364:
case 2057:
case 2669:
case 2655:
case 415:
case 3206:
case 913:
case 2439:
case 1451:
case 2028:
case 279:
case 3822:
case 749:
case 32:
case 2721:
case 3921:
case 2663:
case 2436:
case 961:
case 1622:
case 2943:
case 3743:
case 2740:
case 1593:
case 3940:
case 1860:
case 3209:
case 1395:
case 249:
case 2739:
case 3939:
case 1147:
case 2421:
case 2281:
case 3618:
case 1625:
case 791:
case 1878:
case 2652:
case 1568:
case 1818:
case 2736:
case 3936:
case 3825:
case 2683:
case 1232:
case 300:
case 2733:
case 3933:
case 3084:
case 2686:
case 514:
case 1187:
case 2955:
case 3755:
case 577:
case 3124:
case 571:
case 2478:
case 267:
case 3763:
case 3960:
case 2760:
case 997:
case 2480:
case 979:
case 2220:
case 3223:
case 2643:
case 3640:
case 3452:
case 2308:
case 3489:
case 2168:
case 2649:
case 3226:
case 1777:
case 3901:
case 2701:
case 2008:
case 2547:
case 3486:
case 3802:
case 3769:
case 2969:
case 1833:
case 530:
case 2193:
case 3173:
case 3231:
case 2170:
case 516:
case 3113:
case 2110:
case 2630:
case 3469:
case 2188:
case 3274:
case 2778:
case 3639:
case 3091:
case 3463:
case 302:
case 767:
case 2998:
case 2460:
case 2071:
case 2334:
case 547:
case 2718:
case 2011:
case 3176:
case 713:
case 1167:
case 1839:
case 2199:
case 3537:
case 2952:
case 3119:
case 2983:
case 2780:
case 3980:
case 3912:
case 1634:
case 3561:
case 2772:
case 2891:
case 1273:
case 2159:
case 1131:
case 2992:
case 2509:
case 1542:
case 3495:
case 640:
case 3834:
case 2156:
case 2475:
case 124:
case 3051:
case 2958:
case 2607:
case 3758:
case 25:
case 874:
case 607:
case 980:
case 1030:
case 601:
case 1784:
case 2182:
case 631:
case 1464:
case 2165:
case 1330:
case 637:
case 2153:
case 3267:
case 3427:
case 2162:
case 140:
case 1484:
case 1957:
case 2185:
case 1224:
case 1349:
case 83:
case 3808:
case 1764:
case 131:
case 185:
case 1043:
case 1129:
case 3492:
case 137:
case 975:
case 1928:
case 2715:
case 3915:
case 3458:
case 1343:
case 1126:
case 2775:
case 2301:
case 2161:
case 4085:
case 425:
case 3106:
case 1017:
case 2944:
case 540:
case 3744:
case 1594:
case 31:
case 1077:
case 2001:
case 3657:
case 3908:
case 3069:
case 3055:
case 328:
case 883:
case 1675:
case 3628:
case 195:
case 342:
case 792:
case 2060:
case 2895:
case 3363:
case 909:
case 3875:
case 3582:
case 585:
case 3815:
case 2550:
case 3355:
case 2078:
case 3585:
case 2991:
case 3383:
case 1541:
case 2892:
case 1707:
case 3098:
case 3562:
case 2771:
case 3352:
case 2018:
case 3812:
case 3911:
case 1672:
case 326:
case 1520:
case 3052:
case 3398:
case 2734:
case 3934:
case 2378:
case 3083:
case 4059:
case 484:
case 3089:
case 260:
case 2408:
case 3086:
case 695:
case 699:
case 804:
case 2524:
case 2889:
case 3232:
case 1933:
case 671:
case 1384:
case 353:
case 834:
case 2886:
case 116:
case 3358:
case 2012:
case 1680:
case 3878:
case 2072:
case 3092:
case 2898:
case 1138:
case 2245:
case 2883:
case 141:
case 3880:
case 1678:
case 754:
case 3147:
case 1939:
case 618:
case 2312:
case 2573:
case 2375:
case 3593:
case 1940:
case 2590:
case 3860:
case 403:
case 905:
case 589:
case 199:
case 935:
case 254:
case 2015:
case 1921:
case 3095:
case 956:
case 171:
case 1430:
case 2677:
case 1601:
case 641:
case 821:
case 2405:
case 429:
case 1746:
case 1554:
case 3596:
case 49:
case 87:
case 2866:
case 3599:
case 1749:
case 3902:
case 1203:
case 2869:
case 4068:
case 1064:
case 3307:
case 2265:
case 735:
case 781:
case 1391:
case 2422:
case 1537:
case 756:
case 1179:
case 1455:
case 1918:
case 1176:
case 1978:
case 2651:
case 1798:
case 3548:
case 102:
case 3417:
case 669:
case 1274:
case 810:
case 2256:
case 1214:
case 3477:
case 1633:
case 836:
case 1469:
case 2497:
case 806:
case 1805:
case 1466:
case 2830:
case 1190:
case 1231:
case 3777:
case 808:
case 1802:
case 2849:
case 1486:
case 3997:
case 1769:
case 46:
case 602:
case 4048:
case 1229:
case 2538:
case 256:
case 3922:
case 287:
case 1483:
case 1621:
case 2262:
case 2843:
case 1498:
case 1763:
case 3187:
case 758:
case 1124:
case 2425:
case 2340:
case 3343:
case 3545:
case 301:
case 3126:
case 1975:
case 209:
case 1915:
case 307:
case 528:
case 3129:
case 3043:
case 1492:
case 3346:
case 2120:
case 3224:
case 2644:
case 1287:
case 790:
case 1427:
case 3608:
case 2757:
case 1150:
case 3279:
case 1500:
case 3219:
case 3330:
case 4045:
case 3216:
case 370:
case 1727:
case 2457:
case 3784:
case 486:
case 859:
case 324:
case 2691:
case 1758:
case 2336:
case 1495:
case 1834:
case 2194:
case 1561:
case 3131:
case 3273:
case 1792:
case 1871:
case 2210:
case 3213:
case 739:
case 1351:
case 2339:
case 2831:
case 3557:
case 1191:
case 841:
case 1230:
case 750:
case 1016:
case 3107:
case 2932:
case 1694:
case 2054:
case 1379:
case 1076:
case 1376:
case 1403:
case 1079:
case 2354:
case 3894:
case 2564:
case 1316:
case 2874:
case 1019:
case 3653:
case 1090:
case 1073:
case 134:
case 3682:
case 816:
case 3665:
case 14:
case 104:
case 1373:
case 1575:
case 1882:
case 1390:
case 1865:
case 2745:
case 3945:
case 952:
case 3942:
case 2742:
case 1243:
case 1961:
case 1885:
case 1572:
case 3841:
case 4057:
case 121:
case 6:
case 2445:
case 612:
case 1144:
case 17:
case 3662:
case 3820:
case 497:
case 3087:
case 64:
case 4028:
case 899:
case 1024:
case 2584:
case 2935:
case 1703:
case 1324:
case 363:
case 2140:
case 593:
case 183:
case 1447:
case 3329:
case 475:
case 2624:
case 895:
case 2748:
case 3948:
case 764:
case 1578:
case 2041:
case 3704:
case 544:
case 2904:
case 3525:
case 2320:
case 3323:
case 298:
case 1518:
case 3146:
case 3149:
case 346:
case 796:
case 3023:
case 1937:
case 966:
case 2211:
case 683:
case 3688:
case 1350:
case 1893:
case 2271:
case 3130:
case 1207:
case 2448:
case 1560:
case 322:
case 1888:
case 2234:
case 1050:
case 2690:
case 0:
case 2673:
case 296:
case 1896:
case 2136:
case 2619:
case 2394:
case 2938:
case 3738:
case 3696:
case 1654:
case 3074:
case 445:
case 943:
case 2517:
case 1899:
case 2867:
case 2577:
case 3014:
case 1501:
case 2616:
case 2101:
case 1177:
case 794:
case 344:
case 3169:
case 2228:
case 3837:
case 2551:
case 2488:
case 268:
case 1295:
case 3009:
case 3306:
case 2061:
case 3473:
case 1637:
case 546:
case 3413:
case 3166:
case 33:
case 3003:
case 743:
case 393:
case 1467:
case 3479:
case 3419:
case 2257:
case 2160:
case 517:
case 1787:
case 659:
case 3303:
case 3183:
case 2919:
case 3502:
case 2847:
case 2799:
case 2979:
case 3779:
case 2796:
case 2118:
case 3424:
case 2178:
case 1227:
case 1032:
case 2916:
case 3716:
case 996:
case 2788:
case 1521:
case 548:
case 374:
case 159:
case 2710:
case 2468:
case 2381:
case 1540:
case 2973:
case 3773:
case 266:
case 3953:
case 106:
case 1283:
case 3881:
case 3127:
case 2462:
case 752:
case 155:
case 136:
case 1681:
case 3645:
case 3047:
case 3508:
case 4011:
case 3158:
case 1714:
case 1994:
case 2756:
case 802:
case 2544:
case 3956:
case 1338:
case 3959:
case 2172:
case 832:
case 1429:
case 3192:
case 1038:
case 638:
case 610:
case 2175:
case 1726:
case 636:
case 2115:
case 3277:
case 1266:
case 950:
case 413:
case 915:
case 1600:
case 2459:
case 28:
case 3450:
case 2222:
case 1920:
case 2037:
case 1723:
case 1004:
case 4008:
case 2809:
case 1263:
case 1842:
case 3571:
case 2762:
case 3962:
case 1941:
case 203:
case 2903:
case 2700:
case 1387:
case 1735:
case 4075:
case 3246:
case 454:
case 2626:
case 508:
case 2558:
case 2221:
case 3144:
case 2368:
case 2481:
case 2909:
case 3862:
case 3885:
case 1841:
case 2623:
case 3620:
case 96:
case 2370:
case 3373:
case 2088:
case 3406:
case 555:
case 3882:
case 510:
case 2781:
case 3390:
case 3853:
case 2850:
case 34:
case 79:
case 3313:
case 2239:
case 1251:
case 304:
case 1528:
case 334:
case 2010:
case 3090:
case 3409:
case 2070:
case 2461:
case 1894:
case 2134:
case 3316:
case 3376:
case 2631:
case 2099:
case 1659:
case 703:
case 2400:
case 4012:
case 2674:
case 2399:
case 3859:
case 3:
case 3230:
case 1107:
case 3016:
case 2947:
case 1597:
case 3151:
case 3899:
case 2569:
case 2879:
case 3501:
case 3654:
case 872:
case 1074:
case 2359:
case 1331:
case 2819:
case 4078:
case 2059:
case 1374:
case 2667:
case 3896:
case 1314:
case 646:
case 2876:
case 1693:
case 1670:
case 176:
case 663:
case 3888:
case 2082:
case 1610:
case 2365:
case 3893:
case 122:
case 3560:
case 2563:
case 3207:
case 1291:
case 2873:
case 611:
case 725:
case 559:
case 1688:
case 1404:
case 2353:
case 2813:
case 617:
case 3810:
case 2583:
case 784:
case 3937:
case 146:
case 1525:
case 1704:
case 1146:
case 988:
case 1948:
case 3868:
case 2085:
case 3578:
case 622:
case 4060:
case 1329:
case 842:
case 1026:
case 111:
case 383:
case 3447:
case 117:
case 828:
case 2589:
case 676:
case 1326:
case 1029:
case 1143:
case 1993:
case 3292:
case 1773:
case 1910:
case 788:
case 1713:
case 3521:
case 3258:
case 1186:
case 490:
case 4033:
case 2045:
case 1284:
case 120:
case 2838:
case 1716:
case 3487:
case 3954:
case 2546:
case 462:
case 1776:
case 1424:
case 2125:
case 1999:
case 1502:
case 2967:
case 3767:
case 1152:
case 1719:
case 2454:
case 807:
case 1303:
case 674:
case 1505:
case 1476:
case 801:
case 1416:
case 2530:
case 439:
case 3467:
case 2122:
case 2804:
case 423:
case 288:
case 3848:
case 2042:
case 1490:
case 1968:
case 3637:
case 1473:
case 1006:
case 751:
case 1309:
case 2342:
case 3295:
case 840:
case 10:
case 3177:
case 144:
case 1169:
case 2048:
case 2260:
case 3263:
case 2507:
case 1571:
case 1861:
case 3941:
case 2606:
case 1511:
case 308:
case 3255:
case 57:
case 338:
case 1450:
case 3661:
case 2923:
case 3723:
case 2720:
case 929:
case 99:
case 1534:
case 2603:
case 435:
case 2929:
case 456:
case 1800:
case 2128:
case 2201:
case 3414:
case 1277:
case 2835:
case 405:
case 2926:
case 2931:
case 3731:
case 2832:
case 3994:
case 3338:
case 5:
case 3426:
case 1047:
case 458:
case 1158:
case 2218:
case 1645:
case 76:
case 2441:
case 3283:
case 1982:
case 1965:
case 1953:
case 3252:
case 306:
case 2420:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754301601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,];
var gg_b = "1754301601/";

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
