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
case 3297:
case 1369:
case 671:
case 3596:
case 2669:
case 298:
case 863:
case 3406:
case 705:
case 2333:
case 1633:
case 559:
case 677:
case 1067:
case 3621:
case 1486:
case 774:
case 1387:
case 951:
case 1516:
case 3799:
case 460:
case 3500:
case 832:
case 3147:
case 1576:
case 957:
case 1089:
case 259:
case 1832:
case 3873:
case 1104:
case 1425:
case 640:
case 3260:
case 3716:
case 1599:
case 2045:
case 795:
case 3184:
case 1700:
case 1692:
case 2392:
case 2183:
case 1967:
case 1728:
case 2814:
case 3070:
case 2202:
case 508:
case 3925:
case 3909:
case 900:
case 3181:
case 3010:
case 2152:
case 2641:
case 3579:
case 1341:
case 1395:
case 1810:
case 3703:
case 878:
case 2704:
case 1656:
case 2250:
case 988:
case 2422:
case 1042:
case 1870:
case 2547:
case 4008:
case 1013:
case 117:
case 2196:
case 3765:
case 1155:
case 3285:
case 280:
case 3375:
case 2701:
case 1073:
case 2457:
case 335:
case 1205:
case 1229:
case 622:
case 3413:
case 2119:
case 2414:
case 2994:
case 3659:
case 222:
case 3889:
case 3298:
case 3032:
case 405:
case 1825:
case 1913:
case 1493:
case 2688:
case 2471:
case 2858:
case 522:
case 760:
case 1218:
case 3442:
case 2411:
case 3308:
case 1973:
case 3527:
case 123:
case 73:
case 2584:
case 3320:
case 850:
case 891:
case 3444:
case 40:
case 3325:
case 946:
case 3309:
case 2582:
case 1466:
case 1023:
case 2830:
case 3136:
case 638:
case 2689:
case 2859:
case 3797:
case 735:
case 3966:
case 2472:
case 606:
case 4070:
case 4086:
case 3635:
case 1560:
case 3299:
case 3888:
case 2033:
case 3931:
case 3164:
case 49:
case 1228:
case 1754:
case 521:
case 930:
case 1146:
case 1306:
case 2606:
case 1923:
case 3577:
case 3216:
case 3895:
case 3310:
case 96:
case 1434:
case 3907:
case 206:
case 1044:
case 2424:
case 2105:
case 2345:
case 3066:
case 33:
case 168:
case 238:
case 1645:
case 3487:
case 696:
case 1969:
case 1751:
case 1390:
case 506:
case 929:
case 227:
case 360:
case 2702:
case 1988:
case 1763:
case 4032:
case 3578:
case 952:
case 3153:
case 2459:
case 353:
case 3518:
case 1691:
case 3908:
case 1866:
case 79:
case 3203:
case 305:
case 3393:
case 3182:
case 2549:
case 3671:
case 1705:
case 672:
case 2056:
case 2812:
case 2394:
case 2642:
case 1342:
case 374:
case 9:
case 2237:
case 2536:
case 1420:
case 2040:
case 3265:
case 2872:
case 3495:
case 1088:
case 3529:
case 2821:
case 4093:
case 2561:
case 3622:
case 154:
case 3975:
case 1585:
case 3798:
case 419:
case 3020:
case 395:
case 3726:
case 424:
case 1995:
case 3563:
case 2564:
case 1368:
case 2824:
case 435:
case 2117:
case 3657:
case 2940:
case 3887:
case 995:
case 1956:
case 2995:
case 3030:
case 3546:
case 1940:
case 3357:
case 488:
case 1668:
case 2718:
case 2831:
case 2368:
case 779:
case 2834:
case 1821:
case 2088:
case 3736:
case 172:
case 254:
case 1561:
case 905:
case 386:
case 1056:
case 654:
case 1040:
case 2420:
case 3281:
case 1536:
case 2102:
case 3311:
case 3892:
case 2283:
case 2227:
case 867:
case 751:
case 2313:
case 3:
case 2763:
case 2988:
case 1613:
case 1430:
case 2526:
case 884:
case 673:
case 3374:
case 861:
case 3160:
case 1391:
case 4057:
case 1750:
case 1204:
case 2373:
case 1673:
case 3782:
case 612:
case 138:
case 36:
case 1105:
case 1129:
case 1424:
case 2875:
case 3262:
case 448:
case 121:
case 1255:
case 1702:
case 1238:
case 330:
case 127:
case 1933:
case 2751:
case 1690:
case 2815:
case 2200:
case 3840:
case 2987:
case 3072:
case 2146:
case 960:
case 457:
case 3924:
case 2434:
case 1421:
case 4058:
case 2041:
case 3610:
case 3433:
case 2069:
case 788:
case 2777:
case 2820:
case 765:
case 803:
case 2808:
case 1118:
case 1412:
case 346:
case 3021:
case 2367:
case 855:
case 2717:
case 1033:
case 2560:
case 512:
case 1582:
case 2466:
case 3972:
case 3625:
case 2279:
case 2389:
case 3198:
case 668:
case 3492:
case 1830:
case 2219:
case 3494:
case 2218:
case 730:
case 85:
case 3504:
case 486:
case 3199:
case 1688:
case 2278:
case 1584:
case 3974:
case 3747:
case 3608:
case 68:
case 3537:
case 3359:
case 1414:
case 1119:
case 2565:
case 611:
case 3236:
case 3330:
case 1581:
case 523:
case 3249:
case 1474:
case 3057:
case 2068:
case 729:
case 3911:
case 617:
case 180:
case 3014:
case 4030:
case 2155:
case 3261:
case 2138:
case 919:
case 3781:
case 2013:
case 2205:
case 28:
case 3074:
case 1457:
case 3922:
case 1701:
case 3675:
case 1091:
case 1356:
case 2656:
case 3180:
case 1704:
case 517:
case 1094:
case 1695:
case 3071:
case 2263:
case 3957:
case 511:
case 3784:
case 1340:
case 58:
case 1547:
case 2870:
case 3011:
case 3165:
case 3372:
case 2006:
case 2251:
case 2796:
case 3762:
case 2989:
case 266:
case 136:
case 2893:
case 1871:
case 1458:
case 1045:
case 108:
case 3103:
case 2425:
case 4024:
case 2104:
case 2344:
case 818:
case 1814:
case 2967:
case 3253:
case 1127:
case 2692:
case 64:
case 3958:
case 2090:
case 566:
case 2254:
case 1857:
case 1623:
case 2906:
case 1687:
case 3445:
case 348:
case 2387:
case 752:
case 2580:
case 3324:
case 46:
case 2217:
case 3748:
case 99:
case 159:
case 2089:
case 2832:
case 3607:
case 140:
case 862:
case 2277:
case 414:
case 1945:
case 429:
case 357:
case 198:
case 666:
case 2369:
case 4072:
case 3538:
case 3555:
case 54:
case 2486:
case 1562:
case 2410:
case 3035:
case 3235:
case 3258:
case 1188:
case 1482:
case 409:
case 854:
case 2826:
case 71:
case 3120:
case 3982:
case 983:
case 1572:
case 1836:
case 873:
case 2898:
case 2017:
case 1679:
case 1849:
case 4062:
case 2951:
case 2290:
case 3772:
case 2396:
case 267:
case 320:
case 2885:
case 2638:
case 1355:
case 447:
case 1861:
case 2655:
case 1338:
case 176:
case 3712:
case 2741:
case 2534:
case 3362:
case 441:
case 3533:
case 1245:
case 2977:
case 584:
case 1195:
case 2156:
case 2744:
case 567:
case 1524:
case 3680:
case 3676:
case 1792:
case 2328:
case 4048:
case 2140:
case 2051:
case 2206:
case 3846:
case 1600:
case 3802:
case 2242:
case 799:
case 2637:
case 2063:
case 3949:
case 2426:
case 1046:
case 3665:
case 603:
case 3271:
case 1652:
case 1141:
case 1294:
case 293:
case 2273:
case 1291:
case 2860:
case 2795:
case 3274:
case 3603:
case 758:
case 2508:
case 2383:
case 3061:
case 2192:
case 342:
case 2498:
case 2268:
case 2788:
case 503:
case 3049:
case 481:
case 1123:
case 812:
case 3036:
case 1950:
case 102:
case 4084:
case 244:
case 3107:
case 3347:
case 3222:
case 3446:
case 2929:
case 3730:
case 2078:
case 255:
case 544:
case 2133:
case 2575:
case 3961:
case 2018:
case 420:
case 1677:
case 2019:
case 1847:
case 3438:
case 1617:
case 2767:
case 341:
case 2317:
case 2586:
case 1168:
case 3758:
case 2287:
case 2223:
case 2510:
case 3545:
case 197:
case 1233:
case 2996:
case 3221:
case 2480:
case 2789:
case 2476:
case 150:
case 3048:
case 3697:
case 191:
case 149:
case 2269:
case 823:
case 439:
case 1745:
case 2525:
case 3382:
case 2919:
case 2499:
case 126:
case 2979:
case 2865:
case 1651:
case 1881:
case 1654:
case 482:
case 1038:
case 817:
case 3353:
case 88:
case 1173:
case 1558:
case 2803:
case 456:
case 811:
case 381:
case 1794:
case 218:
case 1629:
case 662:
case 2305:
case 3084:
case 2742:
case 1522:
case 3361:
case 2083:
case 2027:
case 189:
case 2532:
case 3364:
case 1037:
case 3170:
case 2646:
case 1240:
case 1106:
case 910:
case 1663:
case 2363:
case 3081:
case 2052:
case 2816:
case 1557:
case 2295:
case 2639:
case 3774:
case 2880:
case 3947:
case 3186:
case 1256:
case 2650:
case 1001:
case 1514:
case 163:
case 3437:
case 1904:
case 3626:
case 2465:
case 2899:
case 2288:
case 720:
case 2983:
case 1618:
case 1167:
case 84:
case 3594:
case 3981:
case 3336:
case 3230:
case 4061:
case 3047:
case 3259:
case 1511:
case 1189:
case 1901:
case 132:
case 618:
case 3698:
case 563:
case 2937:
case 3879:
case 3427:
case 2189:
case 3398:
case 2511:
case 3542:
case 3819:
case 3636:
case 4085:
case 1952:
case 1465:
case 3903:
case 2481:
case 2904:
case 3208:
case 2167:
case 1768:
case 1983:
case 1927:
case 1318:
case 475:
case 3135:
case 689:
case 964:
case 2663:
case 3065:
case 1646:
case 2037:
case 1532:
case 91:
case 1650:
case 1773:
case 3568:
case 663:
case 1295:
case 1816:
case 494:
case 1052:
case 118:
case 2605:
case 3793:
case 2004:
case 808:
case 2794:
case 3275:
case 2862:
case 334:
case 1083:
case 2522:
case 3661:
case 3215:
case 2190:
case 2055:
case 3883:
case 2038:
case 2884:
case 1354:
case 909:
case 2113:
case 3360:
case 3266:
case 2535:
case 1803:
case 3174:
case 2558:
case 1244:
case 3567:
case 1191:
case 3080:
case 507:
case 1919:
case 1525:
case 37:
case 2745:
case 3171:
case 278:
case 3016:
case 2881:
case 1351:
case 1865:
case 483:
case 2142:
case 2302:
case 3111:
case 3589:
case 697:
case 1480:
case 704:
case 2938:
case 3099:
case 3725:
case 3709:
case 3400:
case 3397:
case 3122:
case 250:
case 1476:
case 1789:
case 3980:
case 1570:
case 3207:
case 1019:
case 3916:
case 3157:
case 549:
case 1223:
case 1900:
case 550:
case 2168:
case 743:
case 3976:
case 1317:
case 1079:
case 1078:
case 1905:
case 813:
case 1897:
case 2464:
case 103:
case 1018:
case 394:
case 1575:
case 502:
case 2187:
case 2123:
case 3429:
case 3817:
case 1268:
case 3124:
case 425:
case 3098:
case 2461:
case 434:
case 410:
case 3720:
case 3926:
case 2449:
case 3143:
case 3588:
case 1795:
case 602:
case 1029:
case 2756:
case 2291:
case 1273:
case 2144:
case 2304:
case 193:
case 1918:
case 827:
case 1383:
case 3085:
case 3854:
case 2436:
case 2740:
case 3851:
case 3715:
case 3172:
case 1063:
case 2337:
case 3775:
case 1601:
case 3418:
case 2301:
case 375:
case 3293:
case 3286:
case 915:
case 3380:
case 1744:
case 1156:
case 3766:
case 3587:
case 3523:
case 1977:
case 1051:
case 1300:
case 3863:
case 531:
case 369:
case 2864:
case 1917:
case 2002:
case 528:
case 2792:
case 1507:
case 2861:
case 2338:
case 167:
case 939:
case 3477:
case 3569:
case 3805:
case 32:
case 1741:
case 2521:
case 231:
case 3997:
case 3417:
case 3159:
case 2453:
case 628:
case 1460:
case 2733:
case 3225:
case 3209:
case 2849:
case 3541:
case 2679:
case 637:
case 2512:
case 1017:
case 1379:
case 3818:
case 734:
case 4016:
case 47:
case 1954:
case 2543:
case 4080:
case 4076:
case 1826:
case 3451:
case 3960:
case 3648:
case 383:
case 2012:
case 3150:
case 3041:
case 2856:
case 938:
case 1386:
case 1280:
case 3434:
case 514:
case 530:
case 921:
case 2433:
case 1760:
case 2610:
case 1310:
case 646:
case 3146:
case 2072:
case 3987:
case 3923:
case 2670:
case 2924:
case 927:
case 229:
case 2185:
case 1934:
case 2921:
case 230:
case 1161:
case 3597:
case 3815:
case 3296:
case 3751:
case 3390:
case 842:
case 368:
case 13:
case 3645:
case 1487:
case 529:
case 385:
case 3969:
case 906:
case 3044:
case 723:
case 3431:
case 2912:
case 2198:
case 1797:
case 4090:
case 546:
case 913:
case 1551:
case 1136:
case 614:
case 3087:
case 1031:
case 3717:
case 3367:
case 246:
case 466:
case 1635:
case 1658:
case 629:
case 1299:
case 3777:
case 2943:
case 2126:
case 996:
case 3069:
case 4006:
case 3944:
case 711:
case 686:
case 1020:
case 195:
case 2322:
case 1622:
case 1798:
case 1915:
case 1495:
case 3088:
case 1505:
case 1529:
case 1657:
case 856:
case 345:
case 2357:
case 1887:
case 1823:
case 4073:
case 3718:
case 3475:
case 6:
case 1332:
case 4013:
case 2632:
case 3807:
case 2546:
case 1726:
case 972:
case 3415:
case 2030:
case 3778:
case 1563:
case 2160:
case 552:
case 4068:
case 1920:
case 1518:
case 1908:
case 1614:
case 2314:
case 2892:
case 1015:
case 2284:
case 3988:
case 1578:
case 586:
case 3313:
case 2281:
case 839:
case 1265:
case 423:
case 3408:
case 1611:
case 3102:
case 1841:
case 5:
case 286:
case 1488:
case 1393:
case 3252:
case 2930:
case 1489:
case 887:
case 3967:
case 3728:
case 977:
case 3090:
case 1184:
case 864:
case 3700:
case 1643:
case 3409:
case 3425:
case 936:
case 971:
case 2103:
case 881:
case 1260:
case 3599:
case 2666:
case 2891:
case 754:
case 4023:
case 3344:
case 1467:
case 366:
case 1086:
case 3989:
case 908:
case 773:
case 2762:
case 3101:
case 657:
case 1010:
case 579:
case 500:
case 3893:
case 2282:
case 1519:
case 1672:
case 3006:
case 651:
case 745:
case 3137:
case 1070:
case 4069:
case 2321:
case 3067:
case 3779:
case 2634:
case 3633:
case 4041:
case 3410:
case 2058:
case 959:
case 257:
case 1406:
case 3470:
case 548:
case 2555:
case 1986:
case 3089:
case 998:
case 3832:
case 2748:
case 3277:
case 1500:
case 590:
case 2445:
case 4044:
case 3516:
case 600:
case 468:
case 2324:
case 1331:
case 1970:
case 1868:
case 485:
case 899:
case 1552:
case 3068:
case 665:
case 688:
case 847:
case 1032:
case 1413:
case 2974:
case 1320:
case 2620:
case 922:
case 2608:
case 2747:
case 3973:
case 2022:
case 2504:
case 2494:
case 4095:
case 1867:
case 3503:
case 870:
case 3263:
case 980:
case 3042:
case 3968:
case 3870:
case 3727:
case 3886:
case 712:
case 3656:
case 1932:
case 4088:
case 3395:
case 2116:
case 3810:
case 1093:
case 1703:
case 2074:
case 3205:
case 2845:
case 38:
case 3229:
case 1375:
case 445:
case 2675:
case 2922:
case 2261:
case 2014:
case 1285:
case 124:
case 3013:
case 2781:
case 473:
case 2468:
case 2375:
case 3091:
case 2162:
case 1845:
case 165:
case 1074:
case 235:
case 519:
case 3457:
case 2890:
case 1615:
case 1781:
case 224:
case 1014:
case 1261:
case 3422:
case 219:
case 535:
case 472:
case 1784:
case 2093:
case 3695:
case 796:
case 98:
case 3250:
case 87:
case 3094:
case 2583:
case 1747:
case 721:
case 2308:
case 3411:
case 1608:
case 738:
case 3584:
case 1974:
case 727:
case 3471:
case 1199:
case 4056:
case 619:
case 2867:
case 1494:
case 1501:
case 2552:
case 3474:
case 1057:
case 2993:
case 2413:
case 923:
case 1236:
case 2630:
case 1330:
case 3581:
case 2298:
case 706:
case 1537:
case 322:
case 1359:
case 3994:
case 4092:
case 2500:
case 2910:
case 2490:
case 1748:
case 359:
case 427:
case 1607:
case 2147:
case 2624:
case 1324:
case 438:
case 3857:
case 2025:
case 2009:
case 3623:
case 3687:
case 1445:
case 148:
case 1058:
case 1035:
case 406:
case 3333:
case 1321:
case 190:
case 151:
case 1538:
case 2297:
case 1555:
case 29:
case 157:
case 3669:
case 2596:
case 1282:
case 0:
case 3871:
case 3458:
case 3435:
case 3152:
case 1312:
case 69:
case 1894:
case 371:
case 2842:
case 2672:
case 2519:
case 1958:
case 2184:
case 834:
case 496:
case 3814:
case 100:
case 3392:
case 3127:
case 1891:
case 20:
case 308:
case 2716:
case 2260:
case 1103:
case 1343:
case 966:
case 2643:
case 3237:
case 152:
case 274:
case 505:
case 2611:
case 869:
case 2265:
case 3872:
case 3151:
case 1281:
case 1930:
case 3549:
case 2393:
case 1959:
case 3394:
case 186:
case 695:
case 759:
case 2841:
case 3812:
case 3056:
case 2075:
case 2844:
case 3204:
case 1374:
case 2203:
case 798:
case 422:
case 3154:
case 1284:
case 2015:
case 3746:
case 3459:
case 1550:
case 595:
case 3824:
case 1539:
case 777:
case 3940:
case 954:
case 480:
case 2726:
case 605:
case 1247:
case 771:
case 3564:
case 736:
case 3956:
case 2332:
case 2798:
case 2975:
case 3561:
case 1197:
case 2020:
case 2869:
case 973:
case 883:
case 1440:
case 2529:
case 1749:
case 2505:
case 4094:
case 2495:
case 2299:
case 1335:
case 436:
case 2635:
case 1358:
case 471:
case 146:
case 1248:
case 477:
case 313:
case 1126:
case 3472:
case 2966:
case 2136:
case 3830:
case 2551:
case 2797:
case 63:
case 1912:
case 1492:
case 3689:
case 408:
case 4045:
case 1972:
case 660:
case 1625:
case 3443:
case 327:
case 440:
case 3702:
case 3255:
case 2161:
case 3092:
case 1921:
case 2934:
case 3424:
case 321:
case 1782:
case 2487:
case 2423:
case 338:
case 2066:
case 23:
case 560:
case 1433:
case 1686:
case 2280:
case 2386:
case 1856:
case 1012:
case 498:
case 53:
case 1924:
case 1670:
case 1840:
case 843:
case 1072:
case 2469:
case 3651:
case 3881:
case 2589:
case 3448:
case 702:
case 2080:
case 326:
case 2171:
case 27:
case 1382:
case 2682:
case 3558:
case 3535:
case 2710:
case 1062:
case 2567:
case 1804:
case 301:
case 2479:
case 2770:
case 2883:
case 2827:
case 57:
case 3055:
case 2653:
case 2114:
case 1353:
case 3113:
case 2419:
case 2999:
case 3884:
case 95:
case 199:
case 141:
case 428:
case 3462:
case 3168:
case 1224:
case 2980:
case 1438:
case 1455:
case 2496:
case 147:
case 4002:
case 2590:
case 1048:
case 2397:
case 2122:
case 3938:
case 3955:
case 1545:
case 2725:
case 397:
case 2099:
case 2573:
case 3167:
case 4050:
case 2135:
case 2452:
case 3574:
case 728:
case 2220:
case 1626:
case 2903:
case 962:
case 731:
case 3514:
case 4046:
case 1437:
case 1259:
case 1722:
case 3511:
case 2398:
case 2483:
case 2427:
case 1698:
case 3484:
case 2636:
case 2819:
case 933:
case 3571:
case 2649:
case 634:
case 3937:
case 1404:
case 1711:
case 3522:
case 1361:
case 1838:
case 210:
case 234:
case 3190:
case 2215:
case 2896:
case 1084:
case 225:
case 2003:
case 3605:
case 3629:
case 11:
case 2275:
case 1186:
case 3791:
case 3001:
case 1774:
case 534:
case 3339:
case 3240:
case 2800:
case 3106:
case 3663:
case 1714:
case 525:
case 3037:
case 2828:
case 2060:
case 328:
case 2805:
case 2829:
case 2997:
case 376:
case 3521:
case 1712:
case 763:
case 1362:
case 1053:
case 3338:
case 1772:
case 337:
case 2477:
case 450:
case 984:
case 491:
case 449:
case 874:
case 1676:
case 3792:
case 3002:
case 2376:
case 3628:
case 967:
case 269:
case 497:
case 2380:
case 3524:
case 1680:
case 732:
case 683:
case 2587:
case 2523:
case 1082:
case 1839:
case 2316:
case 2451:
case 2878:
case 1120:
case 2707:
case 283:
case 2648:
case 1402:
case 895:
case 1953:
case 478:
case 3543:
case 1258:
case 3188:
case 3482:
case 1699:
case 583:
case 3849:
case 2225:
case 3733:
case 401:
case 789:
case 3902:
case 3679:
case 2734:
case 2541:
case 62:
case 407:
case 2454:
case 1982:
case 4038:
case 3836:
case 2708:
case 2647:
case 903:
case 2720:
case 1540:
case 1036:
case 1257:
case 1049:
case 3187:
case 3123:
case 955:
case 2124:
case 1964:
case 1556:
case 2985:
case 1134:
case 1450:
case 707:
case 643:
case 1446:
case 1730:
case 489:
case 2463:
case 3169:
case 944:
case 675:
case 1759:
case 1222:
case 701:
case 3141:
case 2998:
case 2418:
case 3294:
case 2293:
case 504:
case 993:
case 3039:
case 275:
case 1271:
case 1936:
case 3530:
case 1381:
case 2681:
case 1949:
case 3046:
case 2851:
case 463:
case 1665:
case 1211:
case 3337:
case 243:
case 1214:
case 575:
case 3853:
case 3627:
case 3683:
case 1384:
case 2684:
case 432:
case 2854:
case 2588:
case 2303:
case 2143:
case 1274:
case 543:
case 1603:
case 2926:
case 916:
case 3304:
case 3144:
case 750:
case 3756:
case 814:
case 1684:
case 75:
case 2384:
case 3498:
case 242:
case 3383:
case 3327:
case 3508:
case 104:
case 2214:
case 3604:
case 3273:
case 393:
case 1926:
case 2274:
case 3795:
case 3978:
case 3029:
case 992:
case 3352:
case 2271:
case 175:
case 1293:
case 316:
case 1998:
case 1112:
case 2064:
case 2211:
case 3242:
case 2802:
case 829:
case 2665:
case 1365:
case 1172:
case 3426:
case 2949:
case 1681:
case 3063:
case 2439:
case 846:
case 355:
case 3018:
case 2961:
case 194:
case 4052:
case 2134:
case 3575:
case 1985:
case 3897:
case 1026:
case 3905:
case 3929:
case 2446:
case 902:
case 2036:
case 1720:
case 1098:
case 418:
case 2556:
case 2964:
case 3268:
case 1124:
case 642:
case 1429:
case 2049:
case 3788:
case 3963:
case 2721:
case 3017:
case 3379:
case 256:
case 3951:
case 620:
case 3769:
case 2982:
case 3077:
case 1454:
case 1159:
case 615:
case 282:
case 3289:
case 3898:
case 1648:
case 2108:
case 183:
case 1707:
case 1097:
case 718:
case 3826:
case 4028:
case 556:
case 1451:
case 1960:
case 639:
case 3566:
case 1399:
case 3723:
case 3787:
case 2258:
case 2235:
case 2724:
case 1731:
case 1544:
case 2953:
case 3267:
case 169:
case 3328:
case 3917:
case 3497:
case 937:
case 515:
case 1376:
case 852:
case 3206:
case 2846:
case 3051:
case 1316:
case 886:
case 1210:
case 2616:
case 520:
case 2839:
case 2743:
case 2680:
case 1380:
case 3744:
case 762:
case 45:
case 1662:
case 361:
case 1997:
case 1417:
case 539:
case 1805:
case 12:
case 682:
case 367:
case 3054:
case 1569:
case 3290:
case 3655:
case 3638:
case 384:
case 220:
case 4018:
case 3295:
case 3052:
case 587:
case 455:
case 1568:
case 3880:
case 51:
case 1828:
case 2364:
case 3532:
case 581:
case 2081:
case 3363:
case 879:
case 2084:
case 1215:
case 287:
case 2838:
case 3027:
case 3742:
case 3145:
case 21:
case 3329:
case 2771:
case 1793:
case 3952:
case 2336:
case 1483:
case 2698:
case 362:
case 1398:
case 1542:
case 2047:
case 2594:
case 4005:
case 687:
case 2404:
case 1879:
case 1649:
case 3403:
case 664:
case 2109:
case 2125:
case 3593:
case 1965:
case 1158:
case 2984:
case 890:
case 1452:
case 851:
case 2401:
case 3768:
case 3927:
case 784:
case 857:
case 1732:
case 761:
case 4063:
case 3378:
case 1903:
case 4051:
case 1122:
case 793:
case 2962:
case 1400:
case 541:
case 599:
case 1099:
case 258:
case 609:
case 2545:
case 35:
case 3480:
case 1976:
case 3317:
case 3079:
case 241:
case 3767:
case 3287:
case 3900:
case 2735:
case 991:
case 949:
case 1506:
case 716:
case 2455:
case 2132:
case 4054:
case 467:
case 2438:
case 1980:
case 1207:
case 1786:
case 888:
case 2804:
case 1567:
case 2948:
case 703:
case 978:
case 1710:
case 2660:
case 570:
case 1174:
case 2243:
case 3803:
case 3706:
case 3096:
case 1419:
case 699:
case 641:
case 755:
case 2353:
case 1114:
case 1653:
case 4077:
case 1770:
case 1111:
case 3979:
case 3028:
case 270:
case 658:
case 3351:
case 3865:
case 2272:
case 3790:
case 3499:
case 901:
case 1682:
case 2193:
case 3525:
case 1171:
case 1016:
case 744:
case 1080:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748584801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,];
var gg_b = "1748584801/";

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
