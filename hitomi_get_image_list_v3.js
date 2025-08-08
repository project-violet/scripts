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
case 601:
case 1933:
case 91:
case 1409:
case 1315:
case 356:
case 3163:
case 119:
case 1593:
case 3351:
case 3022:
case 689:
case 2997:
case 719:
case 3309:
case 3415:
case 3865:
case 3385:
case 3852:
case 145:
case 508:
case 3582:
case 2529:
case 1781:
case 3823:
case 1191:
case 1149:
case 4026:
case 335:
case 2296:
case 745:
case 1512:
case 1755:
case 3561:
case 616:
case 3270:
case 2648:
case 3785:
case 141:
case 2226:
case 3893:
case 1121:
case 2647:
case 3684:
case 138:
case 2336:
case 331:
case 1565:
case 910:
case 3656:
case 2939:
case 2875:
case 2403:
case 738:
case 2599:
case 2541:
case 786:
case 1552:
case 741:
case 2143:
case 3240:
case 3481:
case 1355:
case 944:
case 2928:
case 3311:
case 2677:
case 2927:
case 682:
case 3092:
case 3455:
case 1861:
case 4060:
case 3812:
case 593:
case 2571:
case 770:
case 216:
case 2563:
case 1405:
case 1873:
case 1319:
case 2009:
case 2713:
case 1489:
case 1290:
case 1968:
case 2680:
case 3419:
case 1175:
case 13:
case 3869:
case 2322:
case 3389:
case 939:
case 1042:
case 3137:
case 1034:
case 1701:
case 3129:
case 1843:
case 205:
case 654:
case 3502:
case 825:
case 2353:
case 1145:
case 1730:
case 2161:
case 3287:
case 317:
case 979:
case 3573:
case 3789:
case 1257:
case 821:
case 1258:
case 1569:
case 2935:
case 77:
case 2595:
case 3264:
case 1719:
case 918:
case 3141:
case 584:
case 2483:
case 932:
case 4074:
case 2392:
case 1802:
case 2753:
case 2891:
case 896:
case 3459:
case 50:
case 3430:
case 1984:
case 1301:
case 2860:
case 1570:
case 3031:
case 3689:
case 2622:
case 2158:
case 3605:
case 2594:
case 3000:
case 2934:
case 1619:
case 850:
case 2067:
case 2498:
case 2942:
case 2068:
case 3406:
case 3333:
case 2653:
case 3807:
case 673:
case 3223:
case 1985:
case 3808:
case 1306:
case 303:
case 760:
case 3962:
case 3870:
case 2084:
case 3047:
case 1911:
case 2190:
case 3955:
case 2275:
case 2780:
case 2056:
case 3304:
case 1174:
case 2450:
case 398:
case 1601:
case 1706:
case 1282:
case 2439:
case 2524:
case 450:
case 633:
case 3733:
case 1630:
case 622:
case 2692:
case 3212:
case 1010:
case 3685:
case 2300:
case 2221:
case 1890:
case 3269:
case 3756:
case 3651:
case 3194:
case 2546:
case 1615:
case 1467:
case 1243:
case 1817:
case 1354:
case 885:
case 1097:
case 1468:
case 1818:
case 3367:
case 1386:
case 1989:
case 2033:
case 39:
case 3887:
case 1866:
case 481:
case 3368:
case 802:
case 2576:
case 3454:
case 1905:
case 1857:
case 809:
case 3930:
case 768:
case 1858:
case 2004:
case 3590:
case 2731:
case 1314:
case 3959:
case 3901:
case 168:
case 3384:
case 3414:
case 524:
case 2348:
case 1456:
case 458:
case 3124:
case 2435:
case 1786:
case 3716:
case 273:
case 2377:
case 1820:
case 2249:
case 2291:
case 1588:
case 1655:
case 983:
case 1587:
case 1828:
case 3064:
case 1580:
case 2982:
case 405:
case 3929:
case 2370:
case 1203:
case 801:
case 2804:
case 482:
case 1945:
case 1058:
case 3236:
case 221:
case 2961:
case 889:
case 1394:
case 4009:
case 3649:
case 3691:
case 2211:
case 1020:
case 2708:
case 3597:
case 2506:
case 3938:
case 1839:
case 1168:
case 3598:
case 1794:
case 2074:
case 394:
case 2669:
case 1695:
case 1090:
case 2285:
case 2032:
case 4011:
case 3726:
case 1810:
case 1460:
case 2209:
case 882:
case 1324:
case 362:
case 1272:
case 401:
case 3087:
case 1066:
case 489:
case 1496:
case 2740:
case 1018:
case 3539:
case 2308:
case 3424:
case 1897:
case 1234:
case 3941:
case 3999:
case 2307:
case 3675:
case 1283:
case 1637:
case 2902:
case 2026:
case 857:
case 3732:
case 2458:
case 1346:
case 1949:
case 3213:
case 3070:
case 2457:
case 4005:
case 3476:
case 3645:
case 2788:
case 1133:
case 2420:
case 199:
case 2787:
case 5:
case 1629:
case 1835:
case 854:
case 2198:
case 625:
case 3877:
case 2665:
case 454:
case 2943:
case 2764:
case 1746:
case 2127:
case 1641:
case 792:
case 2652:
case 3222:
case 167:
case 1548:
case 621:
case 3831:
case 1432:
case 2060:
case 1547:
case 2205:
case 2816:
case 696:
case 2973:
case 457:
case 2466:
case 3008:
case 764:
case 1921:
case 164:
case 2387:
case 2418:
case 2139:
case 990:
case 2417:
case 3437:
case 3542:
case 1228:
case 2515:
case 1475:
case 1741:
case 650:
case 777:
case 2752:
case 1189:
case 971:
case 2204:
case 422:
case 1337:
case 956:
case 829:
case 1105:
case 281:
case 3836:
case 31:
case 3375:
case 4033:
case 58:
case 2461:
case 507:
case 1926:
case 1329:
case 1771:
case 1676:
case 2049:
case 3994:
case 1002:
case 2183:
case 3441:
case 1842:
case 3775:
case 3674:
case 1737:
case 3503:
case 2352:
case 2885:
case 3632:
case 473:
case 1399:
case 1341:
case 2793:
case 2809:
case 1210:
case 65:
case 347:
case 3130:
case 2562:
case 3745:
case 1872:
case 2688:
case 2712:
case 429:
case 1297:
case 734:
case 580:
case 1298:
case 2323:
case 2581:
case 833:
case 1694:
case 1883:
case 658:
case 4067:
case 2519:
case 1795:
case 2920:
case 2670:
case 3248:
case 25:
case 3463:
case 3626:
case 3721:
case 3379:
case 2284:
case 3247:
case 1061:
case 715:
case 2172:
case 3892:
case 1449:
case 2402:
case 685:
case 3277:
case 3349:
case 1553:
case 1082:
case 2134:
case 3425:
case 115:
case 711:
case 555:
case 3779:
case 3583:
case 318:
case 2103:
case 3065:
case 2918:
case 250:
case 3200:
case 940:
case 1763:
case 2889:
case 3660:
case 2473:
case 2805:
case 1513:
case 917:
case 1944:
case 2966:
case 1111:
case 3791:
case 3749:
case 3696:
case 323:
case 2216:
case 3162:
case 142:
case 1592:
case 2608:
case 3023:
case 742:
case 2268:
case 1725:
case 2267:
case 1974:
case 914:
case 3181:
case 332:
case 4056:
case 588:
case 1624:
case 1650:
case 2401:
case 3753:
case 1081:
case 2914:
case 2543:
case 1062:
case 2430:
case 3011:
case 1276:
case 1492:
case 3891:
case 635:
case 152:
case 519:
case 1948:
case 1383:
case 1521:
case 671:
case 2573:
case 708:
case 497:
case 2036:
case 301:
case 1863:
case 3722:
case 1977:
case 1152:
case 2199:
case 2141:
case 3483:
case 3879:
case 1698:
case 2502:
case 675:
case 3182:
case 305:
case 1697:
case 4064:
case 1453:
case 586:
case 469:
case 3792:
case 3244:
case 541:
case 2287:
case 897:
case 2633:
case 1549:
case 1591:
case 2288:
case 3713:
case 512:
case 159:
case 3821:
case 1610:
case 3232:
case 2954:
case 193:
case 3322:
case 2389:
case 3274:
case 648:
case 1895:
case 2137:
case 3680:
case 1015:
case 1579:
case 759:
case 2869:
case 2138:
case 1783:
case 275:
case 1001:
case 1734:
case 2311:
case 3927:
case 1829:
case 985:
case 570:
case 2240:
case 3928:
case 2462:
case 3571:
case 1772:
case 2455:
case 902:
case 1059:
case 2684:
case 2270:
case 3648:
case 357:
case 64:
case 483:
case 1436:
case 3541:
case 2195:
case 958:
case 2751:
case 3939:
case 100:
case 1838:
case 3875:
case 1742:
case 2667:
case 1224:
case 1980:
case 614:
case 3434:
case 2125:
case 2668:
case 184:
case 3529:
case 1871:
case 4070:
case 530:
case 3910:
case 2561:
case 2208:
case 2711:
case 363:
case 2207:
case 1545:
case 235:
case 2022:
case 2351:
case 3736:
case 946:
case 187:
case 256:
case 617:
case 3005:
case 981:
case 3600:
case 70:
case 3998:
case 3537:
case 2385:
case 1841:
case 1703:
case 3997:
case 2906:
case 1575:
case 2415:
case 3538:
case 640:
case 2865:
case 2124:
case 3435:
case 1478:
case 2767:
case 4069:
case 2517:
case 2768:
case 1477:
case 3983:
case 1225:
case 3378:
case 1335:
case 2566:
case 56:
case 3377:
case 373:
case 2716:
case 1448:
case 3636:
case 2959:
case 1447:
case 3700:
case 2414:
case 1574:
case 2864:
case 1603:
case 3279:
case 3347:
case 1006:
case 2316:
case 3777:
case 844:
case 2486:
case 3778:
case 743:
case 3844:
case 143:
case 2454:
case 1672:
case 322:
case 3747:
case 2784:
case 2558:
case 2685:
case 1431:
case 3832:
case 1295:
case 3546:
case 1400:
case 2756:
case 2194:
case 1798:
case 3450:
case 2077:
case 1797:
case 298:
case 3117:
case 1229:
case 479:
case 2212:
case 3166:
case 1936:
case 69:
case 1339:
case 1188:
case 2733:
case 872:
case 1350:
case 1596:
case 1328:
case 2048:
case 3826:
case 423:
case 1327:
case 2962:
case 3084:
case 2304:
case 1237:
case 1238:
case 3427:
case 839:
case 1683:
case 2915:
case 1824:
case 832:
case 568:
case 3497:
case 2406:
case 690:
case 3653:
case 3067:
case 1739:
case 996:
case 2176:
case 1397:
case 203:
case 1271:
case 2807:
case 3896:
case 823:
case 2223:
case 3120:
case 1526:
case 879:
case 3158:
case 921:
case 4012:
case 3622:
case 472:
case 2704:
case 1299:
case 727:
case 1727:
case 1164:
case 2000:
case 818:
case 1728:
case 973:
case 2007:
case 3096:
case 835:
case 3973:
case 4013:
case 1487:
case 3388:
case 1886:
case 448:
case 3418:
case 1024:
case 431:
case 2800:
case 2332:
case 3652:
case 475:
case 1556:
case 3128:
case 3943:
case 12:
case 2831:
case 871:
case 1584:
case 1758:
case 3205:
case 856:
case 2222:
case 4092:
case 2374:
case 3490:
case 3420:
case 4022:
case 2292:
case 1766:
case 1661:
case 922:
case 697:
case 456:
case 2476:
case 3554:
case 1516:
case 1230:
case 3586:
case 3198:
case 1320:
case 2877:
case 1568:
case 2106:
case 2878:
case 1682:
case 933:
case 2774:
case 1357:
case 1094:
case 848:
case 766:
case 1464:
case 2675:
case 2446:
case 1358:
case 1814:
case 3856:
case 1180:
case 2925:
case 3884:
case 2848:
case 435:
case 720:
case 2732:
case 3458:
case 166:
case 2088:
case 262:
case 2087:
case 3833:
case 3307:
case 1177:
case 3740:
case 2539:
case 1806:
case 1643:
case 2424:
case 3135:
case 2360:
case 7:
case 3251:
case 414:
case 3074:
case 2114:
case 2528:
case 3032:
case 1147:
case 2726:
case 553:
case 2971:
case 1673:
case 1148:
case 3285:
case 84:
case 3770:
case 1993:
case 3340:
case 1255:
case 1533:
case 1262:
case 2796:
case 3707:
case 44:
case 2649:
case 1440:
case 1281:
case 2937:
case 713:
case 2186:
case 1602:
case 814:
case 2494:
case 3370:
case 2679:
case 2326:
case 840:
case 1912:
case 728:
case 2510:
case 2236:
case 1470:
case 3804:
case 2760:
case 1343:
case 803:
case 2155:
case 4047:
case 704:
case 2749:
case 3216:
case 3530:
case 3267:
case 1286:
case 2853:
case 104:
case 1702:
case 3501:
case 3268:
case 3103:
case 3918:
case 574:
case 1041:
case 2779:
case 2495:
case 2583:
case 2321:
case 498:
case 78:
case 61:
case 3473:
case 901:
case 1136:
case 107:
case 18:
case 1987:
case 3966:
case 3889:
case 989:
case 2660:
case 1988:
case 1859:
case 272:
case 1830:
case 4031:
case 3172:
case 3957:
case 2277:
case 2946:
case 2349:
case 644:
case 3134:
case 2425:
case 1029:
case 905:
case 2278:
case 537:
case 4000:
case 898:
case 1801:
case 3075:
case 3519:
case 610:
case 180:
case 1037:
case 3769:
case 2721:
case 2813:
case 2379:
case 3284:
case 2976:
case 2247:
case 1505:
case 2093:
case 2248:
case 3712:
case 2159:
case 302:
case 3687:
case 1761:
case 89:
case 1423:
case 3233:
case 3562:
case 2745:
case 672:
case 3688:
case 506:
case 3581:
case 244:
case 3323:
case 1618:
case 865:
case 1206:
case 2101:
case 2069:
case 2674:
case 1465:
case 490:
case 210:
case 776:
case 1095:
case 358:
case 515:
case 639:
case 3851:
case 3809:
case 3793:
case 3365:
case 151:
case 1690:
case 247:
case 3885:
case 3021:
case 3352:
case 2632:
case 176:
case 1855:
case 3049:
case 3811:
case 1620:
case 1412:
case 623:
case 2572:
case 755:
case 3461:
case 1970:
case 1862:
case 2534:
case 155:
case 2429:
case 3515:
case 3079:
case 2438:
case 2119:
case 3752:
case 465:
case 1551:
case 3765:
case 1940:
case 188:
case 1658:
case 21:
case 788:
case 1122:
case 542:
case 304:
case 2974:
case 1501:
case 1268:
case 2725:
case 674:
case 242:
case 2592:
case 2932:
case 3254:
case 1216:
case 3071:
case 1530:
case 3136:
case 491:
case 2944:
case 307:
case 1369:
case 38:
case 3987:
case 1966:
case 1889:
case 2763:
case 677:
case 750:
case 3988:
case 1103:
case 1918:
case 150:
case 4035:
case 3373:
case 3819:
case 1917:
case 908:
case 3964:
case 1134:
case 2553:
case 1640:
case 1402:
case 3859:
case 2325:
case 2491:
case 1045:
case 547:
case 1172:
case 2061:
case 1284:
case 3505:
case 3773:
case 959:
case 2185:
case 1920:
case 2522:
case 249:
case 1670:
case 2795:
case 2479:
case 380:
case 1142:
case 1256:
case 75:
case 2694:
case 1769:
case 2883:
case 4028:
case 1581:
case 1323:
case 2298:
case 3618:
case 185:
case 2297:
case 3206:
case 2371:
case 468:
case 1712:
case 102:
case 3666:
case 3761:
case 1555:
case 1233:
case 1562:
case 2960:
case 1688:
case 606:
case 1809:
case 758:
case 572:
case 351:
case 649:
case 2399:
case 3907:
case 2737:
case 3465:
case 4039:
case 900:
case 158:
case 4050:
case 3452:
case 3153:
case 355:
case 2250:
case 1482:
case 3881:
case 3025:
case 3361:
case 3382:
case 3855:
case 2926:
case 642:
case 2445:
case 2676:
case 2771:
case 1811:
case 3970:
case 579:
case 181:
case 3063:
case 2105:
case 3658:
case 90:
case 2338:
case 987:
case 3122:
case 2189:
case 3657:
case 1204:
case 3585:
case 1079:
case 1664:
case 2803:
case 2646:
case 1752:
case 781:
case 868:
case 388:
case 2228:
case 2577:
case 1388:
case 4083:
case 1150:
case 1867:
case 3886:
case 2578:
case 1387:
case 3024:
case 845:
case 1139:
case 2921:
case 3488:
case 2776:
case 1096:
case 3720:
case 1816:
case 569:
case 3318:
case 1623:
case 3584:
case 3758:
case 1205:
case 2548:
case 267:
case 1490:
case 3219:
case 1127:
case 2699:
case 2641:
case 3556:
case 1665:
case 1514:
case 3567:
case 1198:
case 3320:
case 2979:
case 3717:
case 2835:
case 1197:
case 2629:
case 1420:
case 1612:
case 3661:
case 299:
case 419:
case 3259:
case 1554:
case 3516:
case 253:
case 3230:
case 1110:
case 1693:
case 838:
case 1884:
case 2531:
case 1457:
case 3790:
case 597:
case 841:
case 1458:
case 366:
case 3094:
case 320:
case 1902:
case 3464:
case 3814:
case 2283:
case 1856:
case 2017:
case 2234:
case 1307:
case 3177:
case 2898:
case 3965:
case 1740:
case 1308:
case 3178:
case 2897:
case 3806:
case 3643:
case 1135:
case 699:
case 47:
case 3407:
case 653:
case 1044:
case 3408:
case 1833:
case 2184:
case 1032:
case 3147:
case 2810:
case 1209:
case 2460:
case 3673:
case 3148:
case 3215:
case 2695:
case 870:
case 1074:
case 4042:
case 2850:
case 2167:
case 796:
case 3602:
case 43:
case 3993:
case 2020:
case 1340:
case 3533:
case 3262:
case 196:
case 1211:
case 3076:
case 3131:
case 583:
case 121:
case 667:
case 1804:
case 830:
case 2058:
case 692:
case 2945:
case 2827:
case 1370:
case 2203:
case 3100:
case 3046:
case 328:
case 721:
case 1378:
case 2655:
case 2587:
case 2662:
case 2196:
case 1377:
case 173:
case 2588:
case 1291:
case 1249:
case 1435:
case 2681:
case 773:
case 437:
case 2050:
case 3477:
case 874:
case 2456:
case 4043:
case 1348:
case 1279:
case 268:
case 1347:
case 729:
case 2027:
case 434:
case 3992:
case 1004:
case 129:
case 1636:
case 1731:
case 2160:
case 877:
case 3263:
case 2484:
case 1033:
case 2905:
case 477:
case 122:
case 2989:
case 133:
case 2468:
case 2818:
case 2098:
case 2467:
case 1546:
case 837:
case 1331:
case 2714:
case 3400:
case 4002:
case 920:
case 474:
case 1221:
case 966:
case 1747:
case 626:
case 3170:
case 1748:
case 2010:
case 1832:
case 2144:
case 1692:
case 1166:
case 3936:
case 2659:
case 2261:
case 3339:
case 3350:
case 2507:
case 3596:
case 815:
case 2035:
case 3798:
case 1524:
case 1118:
case 1117:
case 2282:
case 1056:
case 1780:
case 1427:
case 3894:
case 806:
case 9:
case 3710:
case 3560:
case 1084:
case 406:
case 842:
case 3397:
case 3271:
case 1896:
case 3398:
case 561:
case 1120:
case 1068:
case 3824:
case 1497:
case 3086:
case 3739:
case 2951:
case 1498:
case 3241:
case 295:
case 4082:
case 3727:
case 3164:
case 590:
case 1594:
case 668:
case 3728:
case 3526:
case 1380:
case 4061:
case 1860:
case 2570:
case 1622:
case 3062:
case 2301:
case 2984:
case 1011:
case 3276:
case 556:
case 3492:
case 1891:
case 4090:
case 352:
case 571:
case 3948:
case 3055:
case 3650:
case 2802:
case 2330:
case 3639:
case 2956:
case 3081:
case 645:
case 701:
case 1483:
case 4017:
case 1935:
case 3628:
case 678:
case 3383:
case 3521:
case 2258:
case 4066:
case 1722:
case 2257:
case 4057:
case 2072:
case 1244:
case 2266:
case 1353:
case 2145:
case 182:
case 3549:
case 2218:
case 531:
case 3900:
case 782:
case 1182:
case 2843:
case 2606:
case 2701:
case 1051:
case 1322:
case 1274:
case 2042:
case 3895:
case 980:
case 1680:
case 3579:
case 3015:
case 575:
case 2175:
case 23:
case 3783:
case 1713:
case 359:
case 4020:
case 1821:
case 3193:
case 3422:
case 3610:
case 1232:
case 641:
case 1563:
case 2873:
case 2405:
case 1009:
case 686:
case 54:
case 2861:
case 467:
case 3772:
case 492:
case 2523:
case 2904:
case 212:
case 3059:
case 1677:
case 3734:
case 1927:
case 3635:
case 1143:
case 3829:
case 1599:
case 1950:
case 2715:
case 3837:
case 63:
case 2614:
case 1336:
case 2565:
case 1939:
case 3294:
case 300:
case 3169:
case 3838:
case 1875:
case 3742:
case 464:
case 1226:
case 976:
case 2121:
case 1647:
case 238:
case 286:
case 1648:
case 3436:
case 1472:
case 3871:
case 2512:
case 1910:
case 2762:
case 2191:
case 2149:
case 163:
case 1296:
case 3545:
case 2686:
case 2781:
case 540:
case 763:
case 245:
case 3980:
case 384:
case 1529:
case 955:
case 1998:
case 1537:
case 2451:
case 514:
case 3899:
case 3841:
case 1442:
case 3703:
case 1997:
case 3019:
case 1538:
case 936:
case 219:
case 499:
case 2485:
case 1089:
case 30:
case 387:
case 630:
case 2315:
case 1260:
case 2409:
case 1005:
case 892:
case 2493:
case 2585:
case 3337:
case 607:
case 2063:
case 68:
case 1836:
case 11:
case 1375:
case 2658:
case 3338:
case 2940:
case 1542:
case 288:
case 71:
case 3803:
case 3475:
case 3646:
case 3799:
case 3741:
case 978:
case 3227:
case 4006:
case 374:
case 3239:
case 2361:
case 3250:
case 2881:
case 2620:
case 2970:
case 3926:
case 2382:
case 3771:
case 276:
case 2907:
case 3996:
case 710:
case 3073:
case 3536:
case 986:
case 3738:
case 1280:
case 747:
case 680:
case 1069:
case 3737:
case 337:
case 2465:
case 1503:
case 2815:
case 110:
case 2206:
case 3729:
case 144:
case 2618:
case 1130:
case 55:
case 1745:
case 3872:
case 3960:
case 2511:
case 843:
case 912:
case 1159:
case 2761:
case 2423:
case 2192:
case 3185:
case 349:
case 651:
case 1721:
case 1813:
case 2505:
case 1976:
case 2037:
case 424:
case 970:
case 4086:
case 93:
case 3795:
case 1115:
case 1278:
case 3235:
case 2743:
case 558:
case 772:
case 1277:
case 2964:
case 1349:
case 3553:
case 3082:
case 1425:
case 2029:
case 1012:
case 3325:
case 1892:
case 3763:
case 1822:
case 2988:
case 97:
case 1660:
case 2136:
case 311:
case 3513:
case 930:
case 207:
case 3944:
case 718:
case 28:
case 2099:
case 1779:
case 1321:
case 1583:
case 779:
case 1065:
case 2469:
case 1200:
case 2819:
case 3725:
case 2286:
case 3974:
case 1853:
case 1181:
case 4014:
case 2702:
case 3624:
case 655:
case 3932:
case 3111:
case 1749:
case 1696:
case 732:
case 123:
case 2343:
case 1155:
case 1023:
case 509:
case 3663:
case 3058:
case 62:
case 1510:
case 1236:
case 2470:
case 169:
case 3057:
case 2046:
case 3828:
case 1064:
case 3580:
case 228:
case 1326:
case 1929:
case 769:
case 2100:
case 1597:
case 1938:
case 3168:
case 2281:
case 2440:
case 3167:
case 2602:
case 493:
case 1154:
case 3116:
case 1649:
case 1796:
case 852:
case 2993:
case 893:
case 452:
case 3090:
case 2:
case 859:
case 3184:
case 3810:
case 4062:
case 1971:
case 3460:
case 3794:
case 3242:
case 3156:
case 960:
case 1528:
case 3695:
case 1527:
case 3018:
case 1424:
case 3897:
case 3017:
case 1941:
case 1550:
case 3898:
case 3324:
case 2408:
case 1087:
case 3066:
case 1848:
case 6:
case 3949:
case 1070:
case 2790:
case 525:
case 3638:
case 2464:
case 2358:
case 484:
case 1446:
case 1675:
case 3283:
case 2814:
case 1774:
case 3637:
case 2094:
case 220:
case 3376:
case 1106:
case 1878:
case 4019:
case 1040:
case 2718:
case 1877:
case 1963:
case 487:
case 3133:
case 2516:
case 2230:
case 40:
case 1292:
case 2661:
case 4059:
case 3104:
case 392:
case 2757:
case 80:
case 1222:
case 3548:
case 1374:
case 4030:
case 22:
case 3432:
case 2584:
case 596:
case 2556:
case 628:
case 2219:
case 3641:
case 3699:
case 1332:
case 4001:
case 1344:
case 1535:
case 400:
case 2024:
case 783:
case 2854:
case 2487:
case 3444:
case 613:
case 521:
case 3921:
case 2317:
case 1000:
case 2728:
case 2480:
case 4029:
case 2299:
case 3619:
case 2727:
case 1146:
case 1031:
case 3570:
case 1689:
case 807:
case 36:
case 1808:
case 1176:
case 3306:
case 2271:
case 3540:
case 224:
case 4037:
case 703:
case 1915:
case 480:
case 1406:
case 2824:
case 4038:
case 1333:
case 2894:
case 360:
case 1981:
case 2014:
case 1962:
case 2327:
case 2560:
case 326:
case 1047:
case 2328:
case 1293:
case 2710:
case 3404:
case 1048:
case 1733:
case 3630:
case 3507:
case 2596:
case 2350:
case 3144:
case 643:
case 798:
case 2187:
case 1212:
case 3659:
case 391:
case 2339:
case 198:
case 3601:
case 3706:
case 2797:
case 3282:
case 1840:
case 1078:
case 3035:
case 2400:
case 1269:
case 1756:
case 1194:
case 2642:
case 2295:
case 3615:
case 1080:
case 455:
case 3010:
case 1685:
case 1557:
case 1609:
case 3126:
case 1784:
case 1888:
case 765:
case 1520:
case 2922:
case 1887:
case 3416:
case 1454:
case 3905:
case 3098:
case 79:
case 3467:
case 3097:
case 2006:
case 1316:
case 3818:
case 1384:
case 1414:
case 1864:
case 836:
case 2603:
case 3160:
case 2263:
case 1930:
case 3858:
case 2992:
case 967:
case 1356:
case 161:
case 3662:
case 790:
case 3196:
case 1716:
case 3820:
case 1611:
case 451:
case 2108:
case 2544:
case 3655:
case 3587:
case 1566:
case 1517:
case 1768:
case 2477:
case 624:
case 2225:
case 4095:
case 1124:
case 1518:
case 2478:
case 3039:
case 3202:
case 855:
case 378:
case 1906:
case 3179:
case 3451:
case 1852:
case 608:
case 20:
case 3409:
case 3315:
case 2342:
case 977:
case 82:
case 3762:
case 589:
case 135:
case 1207:
case 2871:
case 345:
case 1668:
case 2980:
case 284:
case 1582:
case 1053:
case 3781:
case 974:
case 2224:
case 3614:
case 4024:
case 2742:
case 148:
case 3715:
case 3083:
case 3552:
case 2837:
case 2303:
case 386:
case 866:
case 1270:
case 1785:
case 2436:
case 341:
case 659:
case 1893:
case 1709:
case 582:
case 2772:
case 775:
case 934:
case 3904:
case 3381:
case 312:
case 516:
case 3411:
case 2030:
case 42:
case 2829:
case 1481:
case 1311:
case 2734:
case 3362:
case 3968:
case 2015:
case 1305:
case 33:
case 1869:
case 370:
case 1389:
case 74:
case 2895:
case 906:
case 14:
case 3405:
case 1954:
case 949:
case 3290:
case 2610:
case 1633:
case 3730:
case 1288:
case 2549:
case 3072:
case 2931:
case 557:
case 2112:
case 3266:
case 1287:
case 3034:
case 3217:
case 3701:
case 1129:
case 3843:
case 3606:
case 2697:
case 915:
case 428:
case 4046:
case 2453:
case 3218:
case 2900:
case 2978:
case 3569:
case 140:
case 3003:
case 2165:
case 2977:
case 3719:
case 1199:
case 2413:
case 1573:
case 1789:
case 911:
case 1036:
case 37:
case 563:
case 2123:
case 4:
case 942:
case 813:
case 2055:
case 2062:
case 1171:
case 1430:
case 714:
case 684:
case 2825:
case 2081:
case 2639:
case 1914:
case 114:
case 2650:
case 3802:
case 3330:
case 1401:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754686802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,];
var gg_b = "1754686802/";

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
