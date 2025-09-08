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
case 1125:
case 1202:
case 3758:
case 869:
case 2026:
case 1958:
case 1240:
case 1246:
case 3750:
case 471:
case 2028:
case 3610:
case 2789:
case 2861:
case 3616:
case 1509:
case 1956:
case 651:
case 1950:
case 3970:
case 2938:
case 1871:
case 3976:
case 3169:
case 2159:
case 1776:
case 1449:
case 2645:
case 1051:
case 1748:
case 2582:
case 4044:
case 1702:
case 2268:
case 3948:
case 408:
case 726:
case 1479:
case 1746:
case 3256:
case 1740:
case 3946:
case 1841:
case 956:
case 2003:
case 24:
case 3629:
case 1517:
case 2604:
case 3459:
case 2486:
case 2325:
case 2392:
case 2915:
case 3471:
case 2407:
case 1997:
case 3351:
case 2420:
case 1621:
case 3849:
case 1630:
case 2431:
case 1945:
case 854:
case 493:
case 742:
case 2522:
case 3668:
case 2658:
case 2595:
case 2547:
case 3204:
case 356:
case 3666:
case 2811:
case 4052:
case 2229:
case 1371:
case 255:
case 3194:
case 2716:
case 3297:
case 2419:
case 399:
case 2171:
case 1859:
case 2577:
case 699:
case 3107:
case 2981:
case 3120:
case 51:
case 20:
case 1993:
case 551:
case 1079:
case 1755:
case 3245:
case 2825:
case 3059:
case 2892:
case 2218:
case 2543:
case 2069:
case 426:
case 708:
case 2729:
case 91:
case 3704:
case 2216:
case 2210:
case 951:
case 2259:
case 1438:
case 1366:
case 4022:
case 1421:
case 3269:
case 2626:
case 1389:
case 2949:
case 809:
case 252:
case 3288:
case 1368:
case 4047:
case 8:
case 3010:
case 762:
case 1292:
case 2378:
case 3468:
case 3336:
case 860:
case 1148:
case 1239:
case 745:
case 32:
case 3911:
case 4073:
case 2376:
case 3460:
case 1599:
case 3338:
case 2370:
case 1651:
case 3489:
case 1146:
case 2456:
case 3321:
case 1140:
case 1532:
case 2450:
case 1969:
case 1170:
case 289:
case 1176:
case 2759:
case 4043:
case 1980:
case 3881:
case 2346:
case 2603:
case 1178:
case 2004:
case 3035:
case 3788:
case 3865:
case 1988:
case 1415:
case 716:
case 1081:
case 3315:
case 1725:
case 3992:
case 3158:
case 1739:
case 45:
case 2166:
case 484:
case 37:
case 3150:
case 2093:
case 3985:
case 1021:
case 2505:
case 1038:
case 1785:
case 1860:
case 1866:
case 2574:
case 1889:
case 437:
case 2129:
case 2135:
case 3104:
case 97:
case 705:
case 2876:
case 1316:
case 3726:
case 1310:
case 2058:
case 3821:
case 1926:
case 1907:
case 1920:
case 120:
case 1564:
case 3068:
case 3219:
case 2771:
case 787:
case 3728:
case 2050:
case 1155:
case 3836:
case 3830:
case 3731:
case 3066:
case 3512:
case 57:
case 2355:
case 1285:
case 784:
case 3365:
case 239:
case 1679:
case 1015:
case 2110:
case 2741:
case 92:
case 1261:
case 416:
case 3429:
case 3220:
case 4082:
case 3591:
case 1919:
case 2680:
case 2271:
case 170:
case 3197:
case 690:
case 3145:
case 2493:
case 1903:
case 3231:
case 2790:
case 982:
case 3427:
case 2891:
case 3406:
case 3400:
case 688:
case 596:
case 779:
case 2123:
case 973:
case 1643:
case 3502:
case 1342:
case 2982:
case 108:
case 1308:
case 3209:
case 996:
case 364:
case 3132:
case 3540:
case 1917:
case 1300:
case 3083:
case 1306:
case 3717:
case 1327:
case 3199:
case 2290:
case 2296:
case 1854:
case 1887:
case 2538:
case 3423:
case 2812:
case 4051:
case 1074:
case 263:
case 710:
case 2108:
case 3805:
case 812:
case 559:
case 1323:
case 1622:
case 2663:
case 3352:
case 2064:
case 1556:
case 165:
case 2724:
case 1550:
case 332:
case 171:
case 3874:
case 391:
case 523:
case 1647:
case 1909:
case 567:
case 1383:
case 3027:
case 3006:
case 3263:
case 1134:
case 1682:
case 2253:
case 3042:
case 991:
case 1967:
case 2757:
case 2391:
case 3767:
case 659:
case 2581:
case 967:
case 148:
case 3696:
case 2154:
case 1112:
case 3937:
case 323:
case 1808:
case 1593:
case 861:
case 875:
case 3698:
case 4079:
case 1405:
case 2312:
case 1872:
case 4049:
case 2753:
case 588:
case 2014:
case 102:
case 2922:
case 176:
case 2284:
case 2257:
case 1052:
case 224:
case 3624:
case 1354:
case 2609:
case 3023:
case 1597:
case 410:
case 1201:
case 1191:
case 3487:
case 3454:
case 988:
case 373:
case 2183:
case 2099:
case 894:
case 2334:
case 673:
case 193:
case 547:
case 1077:
case 535:
case 1398:
case 3539:
case 2272:
case 3299:
case 184:
case 806:
case 2417:
case 883:
case 2579:
case 1390:
case 1884:
case 3232:
case 2124:
case 111:
case 3109:
case 168:
case 1580:
case 2706:
case 2801:
case 1569:
case 3496:
case 1043:
case 3683:
case 604:
case 3084:
case 1588:
case 1262:
case 304:
case 1605:
case 1853:
case 307:
case 2772:
case 3822:
case 1932:
case 385:
case 1999:
case 944:
case 2409:
case 286:
case 685:
case 3424:
case 3511:
case 2063:
case 1022:
case 2549:
case 1914:
case 2200:
case 2664:
case 2206:
case 2227:
case 1324:
case 3714:
case 2190:
case 2833:
case 3962:
case 2208:
case 720:
case 719:
case 2198:
case 544:
case 2287:
case 1791:
case 134:
case 1133:
case 3606:
case 1519:
case 3600:
case 3991:
case 833:
case 1890:
case 1384:
case 1357:
case 613:
case 3343:
case 1898:
case 2783:
case 3642:
case 3608:
case 1212:
case 3096:
case 2337:
case 828:
case 3163:
case 907:
case 3377:
case 344:
case 3457:
case 2301:
case 335:
case 2614:
case 647:
case 419:
case 2013:
case 1526:
case 1291:
case 2787:
case 162:
case 1520:
case 347:
case 1101:
case 420:
case 236:
case 635:
case 3347:
case 3024:
case 1528:
case 1353:
case 904:
case 815:
case 2283:
case 243:
case 1495:
case 2551:
case 214:
case 3561:
case 2184:
case 2157:
case 2699:
case 1676:
case 1670:
case 2797:
case 1281:
case 2471:
case 2533:
case 980:
case 497:
case 3407:
case 3431:
case 1678:
case 1265:
case 2293:
case 3428:
case 2275:
case 1485:
case 766:
case 3658:
case 879:
case 1328:
case 2666:
case 256:
case 1910:
case 2194:
case 475:
case 1320:
case 355:
case 3650:
case 461:
case 299:
case 1781:
case 2501:
case 1869:
case 3981:
case 1886:
case 2107:
case 1394:
case 1025:
case 1765:
case 30:
case 2131:
case 60:
case 712:
case 2793:
case 2128:
case 3825:
case 1303:
case 3080:
case 3069:
case 3218:
case 1648:
case 2704:
case 2879:
case 3088:
case 1584:
case 494:
case 1319:
case 154:
case 1929:
case 1646:
case 3210:
case 2441:
case 3026:
case 2758:
case 1968:
case 3885:
case 775:
case 2071:
case 1966:
case 2616:
case 3789:
case 1960:
case 3028:
case 1411:
case 1524:
case 1179:
case 4012:
case 2851:
case 930:
case 2349:
case 1989:
case 1721:
case 2976:
case 2970:
case 1738:
case 4034:
case 2180:
case 3921:
case 2978:
case 3936:
case 1831:
case 1215:
case 3645:
case 797:
case 1061:
case 1736:
case 3582:
case 4091:
case 1439:
case 2948:
case 1388:
case 1492:
case 2902:
case 100:
case 2256:
case 2250:
case 3289:
case 64:
case 3604:
case 2940:
case 1894:
case 1380:
case 3003:
case 2379:
case 1590:
case 1221:
case 3486:
case 3480:
case 2459:
case 2041:
case 555:
case 3339:
case 1655:
case 1715:
case 3915:
case 1230:
case 3488:
case 1345:
case 2985:
case 1070:
case 3505:
case 1076:
case 2175:
case 2416:
case 3241:
case 1751:
case 2294:
case 3951:
case 446:
case 3129:
case 1078:
case 1554:
case 1587:
case 1971:
case 3870:
case 2838:
case 2219:
case 2068:
case 3878:
case 772:
case 3445:
case 2836:
case 3056:
case 3050:
case 2728:
case 2203:
case 1165:
case 2060:
case 2731:
case 1639:
case 1393:
case 1625:
case 820:
case 1251:
case 66:
case 639:
case 3404:
case 2381:
case 2435:
case 1941:
case 149:
case 952:
case 290:
case 3544:
case 2207:
case 1048:
case 2226:
case 2591:
case 478:
case 2197:
case 1304:
case 358:
case 2719:
case 3271:
case 3680:
case 1046:
case 3493:
case 2145:
case 2231:
case 1375:
case 2703:
case 2280:
case 2286:
case 1749:
case 3259:
case 1356:
case 2269:
case 472:
case 2018:
case 1897:
case 1350:
case 406:
case 3631:
case 2010:
case 1358:
case 2016:
case 1523:
case 3628:
case 3097:
case 2336:
case 3458:
case 2466:
case 2338:
case 2911:
case 22:
case 733:
case 1279:
case 3450:
case 2321:
case 3045:
case 939:
case 3759:
case 389:
case 1138:
case 1500:
case 160:
case 2780:
case 3619:
case 1527:
case 689:
case 2769:
case 1121:
case 2035:
case 3004:
case 1508:
case 1130:
case 3603:
case 1136:
case 2029:
case 3302:
case 3168:
case 4001:
case 1448:
case 2158:
case 715:
case 1402:
case 3166:
case 3160:
case 1:
case 2641:
case 3189:
case 4037:
case 2156:
case 1105:
case 1222:
case 2027:
case 2000:
case 3943:
case 1295:
case 1535:
case 674:
case 238:
case 1174:
case 48:
case 125:
case 3391:
case 1957:
case 454:
case 1984:
case 3977:
case 2164:
case 4092:
case 440:
case 3187:
case 4025:
case 2901:
case 259:
case 4039:
case 2690:
case 802:
case 627:
case 2696:
case 2483:
case 223:
case 73:
case 963:
case 2937:
case 1273:
case 2555:
case 1722:
case 2763:
case 848:
case 3312:
case 3995:
case 3014:
case 3753:
case 1364:
case 3257:
case 1832:
case 1516:
case 3609:
case 695:
case 175:
case 2624:
case 1899:
case 324:
case 377:
case 2374:
case 457:
case 3464:
case 2933:
case 2454:
case 2072:
case 197:
case 1773:
case 3183:
case 273:
case 2852:
case 3973:
case 288:
case 3790:
case 2114:
case 2844:
case 977:
case 1996:
case 3891:
case 3123:
case 524:
case 1637:
case 871:
case 740:
case 2408:
case 754:
case 1782:
case 842:
case 1091:
case 3172:
case 2548:
case 400:
case 577:
case 2540:
case 2546:
case 3224:
case 924:
case 2209:
case 2657:
case 2083:
case 3296:
case 3414:
case 1332:
case 2576:
case 267:
case 808:
case 3538:
case 4085:
case 3127:
case 3106:
case 1633:
case 821:
case 3298:
case 1462:
case 663:
case 4061:
case 757:
case 2578:
case 3362:
case 2087:
case 1282:
case 2805:
case 1568:
case 3064:
case 2352:
case 1314:
case 1012:
case 931:
case 4048:
case 1367:
case 1744:
case 3287:
case 3944:
case 1401:
case 2991:
case 2600:
case 2627:
case 2606:
case 4046:
case 586:
case 1437:
case 1173:
case 503:
case 2608:
case 760:
case 2642:
case 3783:
case 837:
case 1195:
case 531:
case 2090:
case 592:
case 2882:
case 2098:
case 1817:
case 1541:
case 244:
case 3467:
case 709:
case 2377:
case 1147:
case 3754:
case 3013:
case 636:
case 128:
case 1433:
case 2347:
case 336:
case 247:
case 101:
case 2395:
case 3009:
case 2623:
case 1662:
case 816:
case 1363:
case 2322:
case 1143:
case 834:
case 2934:
case 2585:
case 3463:
case 1813:
case 133:
case 4070:
case 314:
case 3974:
case 3699:
case 4078:
case 146:
case 614:
case 3184:
case 2561:
case 3333:
case 536:
case 409:
case 3272:
case 887:
case 2539:
case 2525:
case 543:
case 2299:
case 1037:
case 4:
case 3579:
case 1559:
case 460:
case 936:
case 3706:
case 3727:
case 2490:
case 2214:
case 1906:
case 1691:
case 581:
case 3742:
case 2683:
case 3837:
case 2382:
case 1942:
case 3067:
case 3223:
case 2498:
case 207:
case 1972:
case 1033:
case 517:
case 1863:
case 3772:
case 2799:
case 2117:
case 303:
case 3409:
case 603:
case 141:
case 3206:
case 3549:
case 392:
case 3063:
case 172:
case 2687:
case 331:
case 1309:
case 692:
case 2714:
case 3196:
case 1752:
case 884:
case 106:
case 3208:
case 1923:
case 85:
case 2962:
case 1313:
case 3198:
case 3952:
case 2873:
case 463:
case 3828:
case 3736:
case 3215:
case 58:
case 1645:
case 3085:
case 1697:
case 3738:
case 940:
case 3807:
case 1921:
case 3826:
case 3721:
case 1311:
case 2871:
case 1760:
case 3989:
case 3960:
case 3966:
case 954:
case 3524:
case 98:
case 1768:
case 795:
case 4064:
case 2958:
case 540:
case 1026:
case 2139:
case 2513:
case 2202:
case 2125:
case 1885:
case 2278:
case 1392:
case 3236:
case 1488:
case 727:
case 3803:
case 3598:
case 1339:
case 3715:
case 851:
case 3238:
case 2681:
case 3819:
case 180:
case 63:
case 3596:
case 1469:
case 1266:
case 1260:
case 3894:
case 2479:
case 3369:
case 1289:
case 557:
case 3492:
case 1582:
case 2702:
case 2748:
case 600:
case 2451:
case 1710:
case 1716:
case 155:
case 2371:
case 495:
case 1235:
case 4014:
case 3553:
case 3328:
case 53:
case 900:
case 3331:
case 1428:
case 2636:
case 3678:
case 657:
case 969:
case 500:
case 357:
case 3676:
case 1361:
case 477:
case 210:
case 763:
case 3640:
case 3929:
case 3151:
case 2904:
case 1088:
case 654:
case 3557:
case 68:
case 1729:
case 3319:
case 1543:
case 2975:
case 1069:
case 3602:
case 1825:
case 2185:
case 1839:
case 2755:
case 1965:
case 3888:
case 3765:
case 856:
case 3394:
case 2341:
case 1981:
case 3886:
case 1577:
case 1171:
case 340:
case 1456:
case 3279:
case 1450:
case 2140:
case 1045:
case 1370:
case 403:
case 2816:
case 2102:
case 2148:
case 3572:
case 3685:
case 2818:
case 781:
case 2292:
case 3523:
case 3358:
case 1628:
case 2436:
case 2368:
case 1552:
case 2430:
case 3478:
case 87:
case 1631:
case 1626:
case 152:
case 1620:
case 949:
case 3897:
case 3356:
case 492:
case 743:
case 3470:
case 2438:
case 2366:
case 1259:
case 3749:
case 2360:
case 3055:
case 1694:
case 2835:
case 2211:
case 3779:
case 29:
case 1093:
case 1979:
case 6:
case 1160:
case 2739:
case 2725:
case 3402:
case 1168:
case 798:
case 1302:
case 2988:
case 4067:
case 1004:
case 3893:
case 82:
case 1855:
case 3130:
case 2178:
case 1340:
case 3121:
case 1346:
case 2170:
case 1759:
case 3506:
case 1075:
case 3527:
case 2969:
case 360:
case 792:
case 731:
case 1050:
case 436:
case 1771:
case 2907:
case 1497:
case 2316:
case 509:
case 3554:
case 1058:
case 2310:
case 1870:
case 4013:
case 481:
case 2889:
case 3078:
case 1574:
case 2030:
case 2036:
case 2860:
case 9:
case 2866:
case 3751:
case 1241:
case 3076:
case 2785:
case 2038:
case 3070:
case 786:
case 2021:
case 890:
case 909:
case 3345:
case 4017:
case 3375:
case 2903:
case 1493:
case 3455:
case 3304:
case 2335:
case 1271:
case 158:
case 1680:
case 270:
case 417:
case 1686:
case 3002:
case 1544:
case 498:
case 16:
case 3941:
case 1404:
case 2994:
case 1110:
case 3251:
case 1116:
case 2679:
case 3692:
case 2285:
case 3639:
case 2300:
case 961:
case 1224:
case 221:
case 208:
case 867:
case 3782:
case 597:
case 1172:
case 3152:
case 3998:
case 1123:
case 3637:
case 561:
case 70:
case 3996:
case 3990:
case 312:
case 1796:
case 997:
case 3560:
case 3566:
case 1499:
case 994:
case 4028:
case 271:
case 2556:
case 2550:
case 666:
case 1724:
case 1432:
case 1064:
case 1663:
case 2558:
case 2695:
case 2323:
case 4026:
case 4020:
case 755:
case 2673:
case 163:
case 1530:
case 2074:
case 864:
case 525:
case 3034:
case 2005:
case 2887:
case 1414:
case 1290:
case 3864:
case 242:
case 780:
case 2842:
case 2808:
case 2112:
case 3273:
case 3491:
case 2444:
case 2800:
case 3777:
case 2233:
case 2701:
case 127:
case 1581:
case 174:
case 694:
case 3957:
case 1391:
case 3535:
case 2504:
case 2967:
case 1253:
case 4069:
case 3295:
case 4080:
case 3105:
case 3222:
case 4086:
case 2575:
case 1973:
case 2237:
case 1099:
case 838:
case 2823:
case 1862:
case 1183:
case 3277:
case 912:
case 397:
case 2191:
case 618:
case 3144:
case 3814:
case 2201:
case 2733:
case 455:
case 1947:
case 361:
case 1609:
case 124:
case 375:
case 3364:
case 675:
case 3747:
case 1257:
case 3832:
case 1284:
case 3795:
case 202:
case 1753:
case 512:
case 3518:
case 3243:
case 2405:
case 1995:
case 1708:
case 758:
case 4004:
case 1742:
case 3927:
case 2569:
case 1801:
case 3906:
case 2043:
case 322:
case 3691:
case 2644:
case 533:
case 4075:
case 1706:
case 2580:
case 1727:
case 268:
case 489:
case 1700:
case 2586:
case 211:
case 2857:
case 2390:
case 1579:
case 1124:
case 2396:
case 946:
case 25:
case 1417:
case 3867:
case 1272:
case 2398:
case 3001:
case 3313:
case 515:
case 205:
case 1952:
case 683:
case 3752:
case 3923:
case 3612:
case 306:
case 2047:
case 3309:
case 2095:
case 452:
case 287:
case 1196:
case 1190:
case 672:
case 1227:
case 2022:
case 978:
case 915:
case 1409:
case 2999:
case 804:
case 103:
case 2932:
case 2853:
case 3972:
case 3033:
case 3274:
case 46:
case 216:
case 1301:
case 3817:
case 941:
case 315:
case 3205:
case 1337:
case 572:
case 789:
case 3173:
case 2898:
case 906:
case 541:
case 983:
case 3401:
case 2890:
case 2384:
case 378:
case 3367:
case 198:
case 2791:
case 1254:
case 678:
case 1157:
case 346:
case 1184:
case 813:
case 3774:
case 3809:
case 114:
case 3705:
case 850:
case 2734:
case 1463:
case 3143:
case 2495:
case 601:
case 3363:
case 2531:
case 2473:
case 1009:
case 4056:
case 4050:
case 301:
case 2353:
case 328:
case 3987:
case 3954:
case 136:
case 2526:
case 628:
case 1754:
case 1787:
case 2291:
case 1194:
case 2307:
case 2320:
case 3451:
case 1666:
case 80:
case 1204:
case 156:
case 3371:
case 1275:
case 1745:
case 1293:
case 2011:
case 830:
case 767:
case 3945:
case 473:
case 1351:
case 610:
case 3997:
case 1849:
case 3621:
case 1471:
case 1119:
case 1533:
case 2676:
case 629:
case 2281:
case 482:
case 2670:
case 3904:
case 2151:
case 2935:
case 1441:
case 2640:
case 3567:
case 254:
case 3161:
case 2319:
case 4008:
case 1704:
case 438:
case 2557:
case 2584:
case 2602:
case 3975:
case 1775:
case 2303:
case 3185:
case 4027:
case 1059:
case 3079:
case 2888:
case 855:
case 1537:
case 1131:
case 2765:
case 3993:
case 3859:
case 379:
case 2025:
case 1120:
case 1126:
case 459:
case 1297:
case 2781:
case 2869:
case 1501:
case 3778:
case 782:
case 2736:
case 1188:
case 84:
case 2831:
case 467:
case 2826:
case 1180:
case 3776:
case 3871:
case 1970:
case 1169:
case 2721:
case 1349:
case 3950:
case 1851:
case 1750:
case 3509:
case 2960:
case 1610:
case 4087:
case 4054:
case 3202:
case 880:
case 579:
case 3513:
case 3139:
case 1758:
case 796:
case 953:
case 3665:
case 2715:
case 2238:
case 1459:
case 910:
case 3276:
case 723:
case 23:
case 488:
case 269:
case 1629:
case 1946:
case 2386:
case 4083:
case 1635:
case 1902:
case 2492:
case 738:
case 200:
case 510:
case 2439:
case 3748:
case 529:
case 3702:
case 2425:
case 1512:
case 3318:
case 1193:
case 839:
case 1089:
case 1830:
case 3920:
case 1821:
case 3907:
case 619:
case 1219:
case 320:
case 1068:
case 1838:
case 620:
case 3316:
case 1726:
case 3761:
case 3030:
case 2850:
case 707:
case 2856:
case 99:
case 2611:
case 1961:
case 2858:
case 2070:
case 858:
case 3785:
case 785:
case 3868:
case 2345:
case 3465:
case 413:
case 2455:
case 1228:
case 2046:
case 2040:
case 3329:
case 1719:
case 1659:
case 3335:
case 3481:
case 1197:
case 1226:
case 1207:
case 1220:
case 249:
case 3919:
case 1429:
case 3261:
case 3015:
case 2251:
case 3285:
case 1365:
case 2393:
case 2639:
case 4090:
case 3651:
case 1489:
case 1321:
case 3532:
case 3711:
case 2661:
case 3816:
case 3810:
case 12:
case 3599:
case 1466:
case 1338:
case 3148:
case 1468:
case 3292:
case 889:
case 1330:
case 2685:
case 570:
case 735:
case 1562:
case 747:
case 3436:
case 2845:
case 1269:
case 2897:
case 3421:
case 3389:
case 2476:
case 970:
case 3360:
case 3366:
case 2470:
case 1280:
case 2804:
case 1150:
case 2440:
case 39:
case 2:
case 3829:
case 1641:
case 17:
case 3065:
case 744:
case 2402:
case 1315:
case 852:
case 3725:
case 1939:
case 520:
case 3988:
case 404:
case 3415:
case 2542:
case 4084:
case 919:
case 1881:
case 2121:
case 1769:
case 260:
case 1786:
case 2506:
case 1780:
case 3176:
case 2138:
case 3170:
case 571:
case 3593:
case 824:
case 1698:
case 1555:
case 2273:
case 3112:
case 1483:
case 1690:
case 159:
case 2777:
case 1696:
case 3444:
case 1164:
case 965:
case 2957:
case 1767:
case 225:
case 294:
case 138:
case 2529:
case 3967:
case 2174:
case 326:
case 2247:
case 3504:
case 2535:
case 2295:
case 4059:
case 877:
case 3383:
case 1000:
case 2222:
case 3545:
case 521:
case 1305:
case 2773:
case 2144:
case 3191:
case 2277:
case 182:
case 218:
case 3733:
case 508:
case 3201:
case 2814:
case 676:
case 2899:
case 1624:
case 275:
case 2516:
case 2062:
case 196:
case 3354:
case 2510:
case 2364:
case 456:
case 3474:
case 3052:
case 3963:
case 908:
case 2722:
case 3405:
case 827:
case 3872:
case 3300:
case 976:
case 1199:
case 1684:
case 1657:
case 321:
case 1209:
case 164:
case 1132:
case 3917:
case 3342:
case 2091:
case 1548:
case 1213:
case 902:
case 3643:
case 2998:
case 1408:
case 2152:
case 576:
case 4041:
case 3883:
case 2601:
case 1844:
case 1400:
case 2996:
case 1406:
case 502:
case 1114:
case 188:
case 2012:
case 191:
case 266:
case 2560:
case 671:
case 2924:
case 365:
case 3556:
case 1709:
case 132:
case 1874:
case 4071:
case 3913:
case 548:
case 2568:
case 1352:
case 1713:
case 3323:
case 1472:
case 1087:
case 3558:
case 1578:
case 3452:
case 1423:
case 3854:
case 3887:
case 2633:
case 1576:
case 1570:
case 948:
case 2864:
case 2332:
case 1457:
case 316:
case 2147:
case 2274:
case 144:
case 1377:
case 2817:
case 3594:
case 2541:
case 2122:
case 2205:
case 1163:
case 1882:
case 3234:
case 77:
case 1090:
case 2195:
case 3503:
case 1608:
case 2437:
case 1343:
case 1600:
case 150:
case 278:
case 3519:
case 3357:
case 3896:
case 2401:
case 2744:
case 490:
case 3791:
case 3477:
case 334:
case 984:
case 2774:
case 337:
case 3447:
case 246:
case 345:
case 1167:
case 911:
case 817:
case 3422:
case 1585:
case 1373:
case 1934:
case 898:
case 1453:
case 2143:
case 3473:
case 1322:
case 3531:
case 3652:
case 4060:
case 3353:
case 511:
case 2662:
case 1623:
case 2954:
case 2987:
case 968:
case 2571:
case 228:
case 1764:
case 2433:
case 2177:
case 362:
case 3520:
case 3507:
case 2244:
case 1382:
case 790:
case 537:
case 1683:
case 2252:
case 1057:
case 1084:
case 3644:
case 222:
case 3043:
case 2900:
case 2906:
case 2317:
case 2559:
case 3396:
case 684:
case 1232:
case 1109:
case 2037:
case 65:
case 611:
case 562:
case 1525:
case 1539:
case 1113:
case 2001:
case 1843:
case 1873:
case 305:
case 283:
case 605:
case 2923:
case 2752:
case 516:
case 3324:
case 1714:
case 272:
case 4018:
case 3095:
case 2309:
case 687:
case 3022:
case 3914:
case 3999:
case 241:
case 1732:
case 1511:
case 1424:
case 1847:
case 3674:
case 185:
case 1799:
case 42:
case 534:
case 2182:
case 107:
case 3605:
case 3853:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757322002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,];
var gg_b = "1757322002/";

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
