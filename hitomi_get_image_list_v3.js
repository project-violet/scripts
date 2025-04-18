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
case 1018:
case 2322:
case 672:
case 3088:
case 2486:
case 2002:
case 1961:
case 295:
case 2907:
case 3134:
case 3109:
case 1588:
case 1687:
case 1821:
case 2221:
case 440:
case 1279:
case 3851:
case 666:
case 3329:
case 3034:
case 1534:
case 3375:
case 2654:
case 2102:
case 1118:
case 1225:
case 2825:
case 1509:
case 214:
case 3724:
case 3770:
case 2133:
case 1925:
case 2194:
case 4007:
case 2471:
case 237:
case 2787:
case 568:
case 2316:
case 1979:
case 494:
case 2896:
case 1296:
case 3145:
case 934:
case 2541:
case 2207:
case 1807:
case 185:
case 1362:
case 3045:
case 3653:
case 2447:
case 3580:
case 1475:
case 603:
case 2921:
case 3010:
case 2094:
case 1080:
case 415:
case 2033:
case 1646:
case 2861:
case 2678:
case 3106:
case 2601:
case 730:
case 3742:
case 2335:
case 3911:
case 1356:
case 3757:
case 2489:
case 2020:
case 4048:
case 3343:
case 3839:
case 83:
case 1605:
case 3790:
case 1506:
case 668:
case 1331:
case 2491:
case 513:
case 755:
case 965:
case 712:
case 1630:
case 239:
case 2832:
case 2408:
case 1232:
case 2550:
case 68:
case 143:
case 1903:
case 3326:
case 121:
case 1848:
case 328:
case 1276:
case 2876:
case 3638:
case 2344:
case 1203:
case 2803:
case 3537:
case 1976:
case 2948:
case 1443:
case 1798:
case 855:
case 2767:
case 3815:
case 2058:
case 1573:
case 3312:
case 2158:
case 1137:
case 1382:
case 1649:
case 3892:
case 3560:
case 1614:
case 333:
case 4085:
case 3713:
case 1783:
case 3173:
case 2528:
case 3211:
case 830:
case 2604:
case 1715:
case 922:
case 2152:
case 3785:
case 2147:
case 3898:
case 1175:
case 799:
case 3059:
case 1129:
case 40:
case 3632:
case 41:
case 1393:
case 3230:
case 2433:
case 1813:
case 361:
case 1480:
case 3575:
case 1075:
case 18:
case 22:
case 3205:
case 2052:
case 3445:
case 2341:
case 764:
case 1739:
case 3905:
case 29:
case 2516:
case 691:
case 257:
case 2615:
case 3603:
case 2086:
case 3930:
case 220:
case 2838:
case 2913:
case 1842:
case 2242:
case 244:
case 729:
case 1345:
case 278:
case 3748:
case 2377:
case 992:
case 1310:
case 2169:
case 3380:
case 4057:
case 400:
case 1562:
case 2692:
case 727:
case 2500:
case 1368:
case 172:
case 85:
case 1437:
case 2397:
case 1964:
case 897:
case 3543:
case 1217:
case 2817:
case 1556:
case 3473:
case 1870:
case 960:
case 2270:
case 3946:
case 2224:
case 1824:
case 3854:
case 3031:
case 3625:
case 166:
case 259:
case 1143:
case 4070:
case 3923:
case 1306:
case 375:
case 521:
case 3223:
case 2089:
case 835:
case 2474:
case 3696:
case 1772:
case 2519:
case 2108:
case 2066:
case 3468:
case 1112:
case 1736:
case 685:
case 2328:
case 3406:
case 3082:
case 1195:
case 3246:
case 2166:
case 2008:
case 2189:
case 2853:
case 1253:
case 353:
case 797:
case 2091:
case 1582:
case 75:
case 1264:
case 1751:
case 1917:
case 3512:
case 342:
case 3222:
case 4029:
case 2355:
case 3674:
case 468:
case 1372:
case 11:
case 594:
case 875:
case 1113:
case 1271:
case 2668:
case 54:
case 3859:
case 3183:
case 1773:
case 4075:
case 963:
case 2461:
case 3916:
case 1013:
case 2505:
case 3101:
case 3760:
case 3083:
case 2606:
case 3198:
case 1247:
case 2847:
case 236:
case 1407:
case 2728:
case 1969:
case 1650:
case 3542:
case 667:
case 1952:
case 1269:
case 2869:
case 327:
case 3472:
case 2673:
case 853:
case 3436:
case 132:
case 1768:
case 2929:
case 3307:
case 906:
case 335:
case 1706:
case 2425:
case 1142:
case 1971:
case 3590:
case 775:
case 2549:
case 1157:
case 2138:
case 3027:
case 1527:
case 1628:
case 540:
case 2084:
case 2479:
case 466:
case 3415:
case 3570:
case 1991:
case 3524:
case 624:
case 640:
case 3163:
case 364:
case 2688:
case 3440:
case 1843:
case 1304:
case 1024:
case 3154:
case 2741:
case 293:
case 2403:
case 3054:
case 1124:
case 2995:
case 1966:
case 669:
case 3063:
case 3780:
case 472:
case 329:
case 1826:
case 2117:
case 3944:
case 2634:
case 1989:
case 238:
case 3348:
case 1554:
case 1745:
case 2164:
case 403:
case 3244:
case 652:
case 2889:
case 1289:
case 3178:
case 2295:
case 2866:
case 3385:
case 918:
case 1812:
case 2212:
case 605:
case 241:
case 2610:
case 2476:
case 3078:
case 64:
case 2808:
case 183:
case 3900:
case 2546:
case 694:
case 2891:
case 1734:
case 413:
case 1793:
case 761:
case 3935:
case 2125:
case 1818:
case 2218:
case 1442:
case 2980:
case 124:
case 284:
case 1600:
case 140:
case 2367:
case 1933:
case 1301:
case 828:
case 3977:
case 2719:
case 1021:
case 3151:
case 2744:
case 3809:
case 532:
case 169:
case 2079:
case 2484:
case 3051:
case 1121:
case 2330:
case 500:
case 4018:
case 3941:
case 33:
case 2305:
case 3712:
case 3241:
case 3666:
case 545:
case 152:
case 833:
case 2161:
case 2700:
case 3743:
case 3357:
case 2735:
case 115:
case 1065:
case 1107:
case 1619:
case 3342:
case 312:
case 1007:
case 105:
case 2196:
case 279:
case 14:
case 1731:
case 51:
case 3483:
case 1880:
case 2280:
case 3507:
case 2061:
case 2659:
case 211:
case 1539:
case 2176:
case 782:
case 1504:
case 61:
case 2716:
case 2820:
case 1220:
case 583:
case 421:
case 443:
case 3370:
case 796:
case 1354:
case 258:
case 3647:
case 3250:
case 1363:
case 2937:
case 645:
case 1762:
case 3806:
case 2076:
case 3585:
case 1424:
case 1616:
case 1515:
case 3686:
case 1759:
case 3192:
case 2417:
case 3669:
case 632:
case 1258:
case 2858:
case 2237:
case 4060:
case 896:
case 1974:
case 1920:
case 1378:
case 2346:
case 610:
case 1860:
case 3463:
case 3729:
case 2662:
case 1592:
case 3140:
case 4037:
case 3454:
case 2103:
case 4025:
case 808:
case 1469:
case 3371:
case 3502:
case 195:
case 2821:
case 1221:
case 104:
case 2018:
case 3236:
case 3855:
case 851:
case 3624:
case 2961:
case 1486:
case 3272:
case 456:
case 4079:
case 2534:
case 1746:
case 59:
case 1663:
case 386:
case 2225:
case 1879:
case 818:
case 2996:
case 659:
case 392:
case 2979:
case 3717:
case 3951:
case 3386:
case 137:
case 1787:
case 4061:
case 1541:
case 3177:
case 590:
case 2623:
case 1265:
case 3422:
case 2865:
case 479:
case 3041:
case 662:
case 1471:
case 3369:
case 52:
case 2180:
case 2925:
case 751:
case 1094:
case 3936:
case 2763:
case 1033:
case 2261:
case 1861:
case 2646:
case 2545:
case 3141:
case 125:
case 2362:
case 3533:
case 2475:
case 401:
case 1074:
case 1020:
case 2568:
case 1597:
case 2667:
case 3992:
case 1601:
case 3520:
case 1335:
case 3738:
case 2356:
case 2495:
case 2232:
case 1832:
case 2727:
case 243:
case 2903:
case 2630:
case 3940:
case 3197:
case 2276:
case 1876:
case 2848:
case 388:
case 2412:
case 181:
case 221:
case 477:
case 690:
case 3784:
case 2605:
case 1714:
case 1491:
case 411:
case 1120:
case 2331:
case 1174:
case 1749:
case 816:
case 4081:
case 3366:
case 863:
case 2573:
case 2885:
case 1285:
case 3215:
case 3128:
case 2037:
case 3400:
case 2203:
case 2299:
case 1803:
case 1344:
case 3558:
case 69:
case 2976:
case 657:
case 2160:
case 2701:
case 3389:
case 3642:
case 2783:
case 2060:
case 3811:
case 1730:
case 1528:
case 2281:
case 1627:
case 2382:
case 3904:
case 2649:
case 3028:
case 2137:
case 3308:
case 3690:
case 2614:
case 706:
case 1071:
case 436:
case 996:
case 3201:
case 3927:
case 3799:
case 3441:
case 525:
case 3022:
case 1152:
case 2715:
case 982:
case 774:
case 3867:
case 2984:
case 1639:
case 3302:
case 3571:
case 2175:
case 2559:
case 1147:
case 28:
case 3805:
case 1047:
case 2075:
case 639:
case 1052:
case 681:
case 3552:
case 3830:
case 1711:
case 3781:
case 2334:
case 1171:
case 1942:
case 2480:
case 3648:
case 1494:
case 1213:
case 2813:
case 120:
case 1257:
case 1402:
case 3016:
case 4084:
case 307:
case 3983:
case 1242:
case 2842:
case 144:
case 1913:
case 2418:
case 514:
case 848:
case 2704:
case 3586:
case 1615:
case 1516:
case 874:
case 3849:
case 2310:
case 3333:
case 2562:
case 1692:
case 3814:
case 2890:
case 3776:
case 2345:
case 3901:
case 789:
case 3116:
case 3227:
case 3732:
case 317:
case 1186:
case 731:
case 2043:
case 1636:
case 998:
case 1535:
case 438:
case 1672:
case 2870:
case 1270:
case 2824:
case 1224:
case 1397:
case 1500:
case 2368:
case 787:
case 272:
case 2126:
case 1817:
case 2964:
case 3621:
case 933:
case 2026:
case 3135:
case 97:
case 2531:
case 746:
case 9:
case 3428:
case 2306:
case 3254:
case 266:
case 2460:
case 3263:
case 970:
case 1066:
case 1108:
case 4064:
case 213:
case 2772:
case 3954:
case 3497:
case 3044:
case 581:
case 2373:
case 3665:
case 1191:
case 441:
case 162:
case 1420:
case 3566:
case 1474:
case 846:
case 3119:
case 1091:
case 3607:
case 1189:
case 2917:
case 3144:
case 2751:
case 928:
case 3725:
case 176:
case 203:
case 1008:
case 1166:
case 3846:
case 1924:
case 2195:
case 2271:
case 3130:
case 4047:
case 2773:
case 42:
case 902:
case 2336:
case 1355:
case 611:
case 3822:
case 3758:
case 21:
case 490:
case 677:
case 3167:
case 20:
case 2583:
case 1275:
case 2969:
case 2650:
case 1530:
case 3325:
case 2252:
case 1852:
case 1728:
case 2351:
case 955:
case 765:
case 819:
case 3816:
case 1673:
case 200:
case 1886:
case 2286:
case 387:
case 1929:
case 865:
case 2042:
case 556:
case 232:
case 2768:
case 1184:
case 2421:
case 2947:
case 2190:
case 1869:
case 2952:
case 3149:
case 3538:
case 2628:
case 2527:
case 1750:
case 3049:
case 4086:
case 3361:
case 1479:
case 2090:
case 3014:
case 420:
case 3660:
case 3584:
case 709:
case 2706:
case 4069:
case 457:
case 210:
case 1138:
case 3618:
case 2304:
case 1587:
case 1403:
case 2339:
case 2485:
case 684:
case 2991:
case 707:
case 3835:
case 3256:
case 1693:
case 1609:
case 3332:
case 2563:
case 1226:
case 3187:
case 3376:
case 138:
case 1777:
case 1634:
case 3411:
case 1995:
case 834:
case 3231:
case 3794:
case 1523:
case 2266:
case 1295:
case 3146:
case 2788:
case 4091:
case 3931:
case 3399:
case 3844:
case 4008:
case 501:
case 2340:
case 2289:
case 1153:
case 3023:
case 871:
case 1891:
case 1546:
case 2734:
case 3123:
case 1645:
case 1053:
case 2677:
case 3956:
case 1311:
case 511:
case 807:
case 2793:
case 2709:
case 3381:
case 3282:
case 1943:
case 1610:
case 2448:
case 1476:
case 3564:
case 462:
case 3680:
case 2812:
case 141:
case 1808:
case 2208:
case 3553:
case 2392:
case 888:
case 2572:
case 414:
case 2301:
case 950:
case 760:
case 2536:
case 2021:
case 1744:
case 1179:
case 1555:
case 184:
case 3288:
case 3643:
case 316:
case 1218:
case 2818:
case 1125:
case 2994:
case 2457:
case 1802:
case 927:
case 2600:
case 1305:
case 2782:
case 1631:
case 3579:
case 749:
case 2551:
case 1484:
case 156:
case 1079:
case 3525:
case 1330:
case 2121:
case 3414:
case 2490:
case 4002:
case 2383:
case 404:
case 2756:
case 3467:
case 1735:
case 4033:
case 2644:
case 3934:
case 2065:
case 2107:
case 215:
case 942:
case 252:
case 1161:
case 3596:
case 3841:
case 3988:
case 2880:
case 1280:
case 1918:
case 2731:
case 95:
case 1682:
case 2902:
case 1061:
case 3384:
case 3430:
case 1833:
case 2233:
case 363:
case 3877:
case 1196:
case 205:
case 2165:
case 3561:
case 2007:
case 24:
case 3405:
case 788:
case 179:
case 860:
case 481:
case 3769:
case 3423:
case 886:
case 2274:
case 1874:
case 439:
case 999:
case 2539:
case 318:
case 3897:
case 1176:
case 1659:
case 892:
case 1132:
case 1716:
case 3317:
case 722:
case 177:
case 2504:
case 854:
case 3446:
case 3973:
case 1076:
case 4020:
case 101:
case 636:
case 3206:
case 3675:
case 351:
case 847:
case 2354:
case 158:
case 1464:
case 3576:
case 2363:
case 3532:
case 1937:
case 1453:
case 2085:
case 747:
case 3503:
case 3599:
case 2837:
case 1237:
case 2515:
case 1003:
case 1099:
case 1181:
case 3273:
case 2424:
case 3771:
case 2759:
case 3353:
case 1260:
case 822:
case 3011:
case 1081:
case 3581:
case 2185:
case 593:
case 3828:
case 1346:
case 2378:
case 112:
case 891:
case 936:
case 3007:
case 2561:
case 1845:
case 2877:
case 743:
case 721:
case 2405:
case 3294:
case 3731:
case 3413:
case 1810:
case 394:
case 1483:
case 482:
case 263:
case 1608:
case 542:
case 3902:
case 1507:
case 3233:
case 1666:
case 2596:
case 699:
case 352:
case 1565:
case 4045:
case 2993:
case 2909:
case 1498:
case 1357:
case 2467:
case 2338:
case 315:
case 597:
case 102:
case 4010:
case 1689:
case 2414:
case 2626:
case 2293:
case 3490:
case 369:
case 1051:
case 2449:
case 527:
case 4088:
case 1834:
case 1941:
case 13:
case 2708:
case 2155:
case 1712:
case 2579:
case 3782:
case 216:
case 2910:
case 2643:
case 3994:
case 1036:
case 1521:
case 2288:
case 2766:
case 664:
case 821:
case 1977:
case 2945:
case 426:
case 791:
case 3536:
case 3021:
case 1151:
case 2828:
case 3920:
case 498:
case 2581:
case 2747:
case 1092:
case 3860:
case 2353:
case 2968:
case 1729:
case 1454:
case 2364:
case 2011:
case 1873:
case 2273:
case 3470:
case 47:
case 433:
case 2111:
case 367:
case 993:
case 650:
case 529:
case 885:
case 4:
case 1040:
case 627:
case 3837:
case 1950:
case 1015:
case 470:
case 697:
case 1548:
case 1647:
case 2850:
case 3363:
case 3958:
case 2446:
case 785:
case 2973:
case 941:
case 3762:
case 599:
case 2206:
case 1806:
case 1868:
case 642:
case 2268:
case 2897:
case 1297:
case 3148:
case 218:
case 2786:
case 3504:
case 3220:
case 2423:
case 1039:
case 246:
case 1307:
case 3706:
case 1862:
case 2262:
case 3142:
case 2959:
case 2660:
case 310:
case 3157:
case 1027:
case 1922:
case 2049:
case 3628:
case 766:
case 1451:
case 2361:
case 1542:
case 3947:
case 3190:
case 3952:
case 2149:
case 2637:
case 573:
case 4062:
case 53:
case 3286:
case 772:
case 1472:
case 1127:
case 3057:
case 300:
case 1436:
case 332:
case 3768:
case 984:
case 3042:
case 2030:
case 2379:
case 3351:
case 872:
case 3013:
case 15:
case 1101:
case 1083:
case 1198:
case 3583:
case 3247:
case 2005:
case 345:
case 3407:
case 4059:
case 2325:
case 3969:
case 703:
case 1674:
case 713:
case 555:
case 1620:
case 3372:
case 31:
case 3501:
case 2067:
case 2962:
case 1001:
case 3113:
case 3598:
case 2259:
case 1183:
case 3773:
case 1321:
case 2130:
case 2680:
case 3812:
case 612:
case 901:
case 1882:
case 2564:
case 3448:
case 248:
case 3392:
case 1633:
case 383:
case 1900:
case 2123:
case 3677:
case 3578:
case 958:
case 2381:
case 768:
case 2956:
case 655:
case 2844:
case 3289:
case 4082:
case 3895:
case 1178:
case 3641:
case 3315:
case 602:
case 2931:
case 1385:
case 1054:
case 3124:
case 2733:
case 3710:
case 1831:
case 2794:
case 1063:
case 1492:
case 2187:
case 289:
case 129:
case 3563:
case 63:
case 1944:
case 1919:
case 1348:
case 2376:
case 3745:
case 2835:
case 2256:
case 1163:
case 164:
case 2517:
case 475:
case 2618:
case 1440:
case 3843:
case 3304:
case 3024:
case 1154:
case 1200:
case 1062:
case 2901:
case 6:
case 3345:
case 914:
case 217:
case 3611:
case 2227:
case 67:
case 2849:
case 1249:
case 2814:
case 1214:
case 3562:
case 1967:
case 4027:
case 3739:
case 883:
case 435:
case 1699:
case 1930:
case 2016:
case 3418:
case 1162:
case 2983:
case 1632:
case 582:
case 2781:
case 1230:
case 1676:
case 368:
case 3813:
case 1410:
case 442:
case 2283:
case 1159:
case 3480:
case 2547:
case 3075:
case 596:
case 1529:
case 2805:
case 2122:
case 2477:
case 783:
case 4001:
case 628:
case 2022:
case 4083:
case 3715:
case 1949:
case 1318:
case 3388:
case 45:
case 3559:
case 1914:
case 2571:
case 937:
case 2867:
case 497:
case 670:
case 1801:
case 2201:
case 2441:
case 981:
case 3012:
case 1406:
case 70:
case 1082:
case 939:
case 745:
case 1661:
case 1246:
case 1360:
case 3253:
case 153:
case 832:
case 570:
case 2119:
case 2607:
case 3264:
case 1512:
case 800:
case 1721:
case 4078:
case 1696:
case 2665:
case 1595:
case 2019:
case 3772:
case 3095:
case 313:
case 682:
case 2358:
case 1337:
case 2963:
case 1182:
case 71:
case 2497:
case 2761:
case 81:
case 3460:
case 1863:
case 1526:
case 1625:
case 366:
case 209:
case 1679:
case 2135:
case 3531:
case 598:
case 626:
case 175:
case 1707:
case 464:
case 1765:
case 3437:
case 4063:
case 700:
case 3964:
case 219:
case 1287:
case 1543:
case 1056:
case 3217:
case 3126:
case 1131:
case 2320:
case 3556:
case 57:
case 5:
case 3824:
case 429:
case 2533:
case 2077:
case 3475:
case 867:
case 3510:
case 1955:
case 3763:
case 2936:
case 653:
case 3080:
case 2972:
case 3545:
case 430:
case 3261:
case 1724:
case 1770:
case 3925:
case 196:
case 1110:
case 1459:
case 2369:
case 2386:
case 455:
case 2951:
case 2717:
case 3979:
case 561:
case 222:
case 182:
case 2177:
case 3296:
case 1093:
case 1851:
case 2753:
case 3534:
case 1375:
case 2347:
case 3778:
case 3225:
case 3509:
case 3593:
case 978:
case 2236:
case 1836:
case 944:
case 1872:
case 2670:
case 957:
case 767:
case 3359:
case 1617:
case 1193:
case 254:
case 3687:
case 3821:
case 1312:
case 3137:
case 3382:
case 2292:
case 1892:
case 249:
case 1684:
case 1560:
case 2690:
case 852:
case 3426:
case 3783:
case 2391:
case 1173:
case 2811:
case 1211:
case 1638:
case 1073:
case 2657:
case 2558:
case 4092:
case 2400:
case 3299:
case 3932:
case 1537:
case 3701:
case 805:
case 2642:
case 1395:
case 2435:
case 2366:
case 724:
case 1456:
case 3037:
case 1815:
case 3885:
case 740:
case 26:
case 794:
case 3506:
case 661:
case 705:
case 3232:
case 4039:
case 343:
case 3903:
case 1326:
case 3727:
case 1006:
case 3412:
case 4004:
case 321:
case 2613:
case 3848:
case 288:
case 2197:
case 2097:
case 3495:
case 1911:
case 869:
case 3356:
case 2574:
case 2419:
case 752:
case 962:
case 1839:
case 2992:
case 3568:
case 2483:
case 3280:
case 1612:
case 3349:
case 3682:
case 2507:
case 255:
case 1384:
case 1430:
case 3833:
case 3314:
case 2608:
case 1877:
case 2277:
case 3196:
case 2845:
case 739:
case 2691:
case 1561:
case 90:
case 2726:
case 4041:
case 1405:
case 781:
case 1338:
case 91:
case 3735:
case 2498:
case 2342:
case 2689:
case 1934:
case 3096:
case 3700:
case 2565:
case 1695:
case 2666:
case 454:
case 273:
case 2941:
case 689:
case 3631:
case 2712:
case 106:
case 1155:
case 631:
case 3484:
case 2051:
case 1525:
case 3330:
case 1209:
case 1234:
case 2313:
case 587:
case 486:
case 3719:
case 2977:
case 2151:
case 546:
case 492:
case 3980:
case 1288:
case 1055:
case 1643:
case 3218:
case 932:
case 1766:
case 3367:
case 2795:
case 1353:
case 2463:
case 3199:
case 3103:
case 2454:
case 1581:
case 646:
case 1828:
case 2228:
case 1752:
case 3511:
case 2115:
case 460:
case 3346:
case 1747:
case 704:
case 3417:
case 2192:
case 687:
case 1487:
case 2669:
case 1599:
case 1503:
case 1111:
case 449:
case 3003:
case 2686:
case 3181:
case 2585:
case 531:
case 1273:
case 4028:
case 1906:
case 3323:
case 589:
case 983:
case 725:
case 3076:
case 108:
case 1629:
case 895:
case 2806:
case 2647:
case 574:
case 358:
case 3464:
case 1576:
case 2104:
case 1532:
case 1850:
case 3453:
case 814:
case 3820:
case 488:
case 1423:
case 2928:
case 2324:
case 4050:
case 118:
case 2297:
case 3176:
case 1268:
case 2868:
case 2671:
case 3659:
case 737:
case 311:
case 3132:
case 3387:
case 1786:
case 2922:
case 407:
case 969:
case 3479:
case 2451:
case 4016:
case 1014:
case 516:
case 3514:
case 1959:
case 862:
case 1584:
case 235:
case 2307:
case 1262:
case 2127:
case 1816:
case 3673:
case 940:
case 3886:
case 227:
case 2472:
case 3797:
case 3929:
case 1396:
case 2365:
case 1455:
case 417:
case 3975:
case 2542:
case 3869:
case 2658:
case 1149:
case 1774:
case 250:
case 1005:
case 1167:
case 2513:
case 2198:
case 3852:
case 3728:
case 1030:
case 1379:
case 297:
case 3606:
case 2083:
case 4022:
case 434:
case 3505:
case 1259:
case 2183:
case 2859:
case 3871:
case 1962:
case 2001:
case 3567:
case 1130:
case 762:
case 2674:
case 3496:
case 859:
case 2620:
case 618:
case 2737:
case 3355:
case 1822:
case 2222:
case 563:
case 1105:
case 1067:
case 3891:
case 3645:
case 3053:
case 518:
case 820:
case 1381:
case 1282:
case 72:
case 857:
case 148:
case 2694:
case 1564:
case 4019:
case 341:
case 3808:
case 89:
case 1553:
case 323:
case 2633:
case 1046:
case 3523:
case 3866:
case 3295:
case 1146:
case 2385:
case 2718:
case 465:
case 1399:
case 1303:
case 3926:
case 2244:
case 508:
case 2439:
case 299:
case 3164:
case 2219:
case 1819:
case 878:
case 3153:
case 1023:
case 778:
case 3117:
case 4000:
case 229:
case 189:
case 1187:
case 2348:
case 1733:
case 1411:
case 419:
case 3481:
case 4035:
case 2831:
case 1231:
case 1794:
case 1618:
case 79:
case 2440:
case 1982:
case 2163:
case 1517:
case 1800:
case 409:
case 82:
case 2602:
case 3741:
case 720:
case 2570:
case 2524:
case 616:
case 2415:
case 890:
case 744:
case 2856:
case 1087:
case 1394:
case 3884:
case 2967:
case 3692:
case 1814:
case 1998:
case 3290:
case 3377:
case 1776:
case 554:
case 1116:
case 2827:
case 1732:
case 738:
case 4014:
case 3402:
case 592:
case 3086:
case 1569:
case 107:
case 1983:
case 3242:
case 2488:
case 3640:
case 3913:
case 2162:
case 823:
case 39:
case 3341:
case 586:
case 446:
case 1805:
case 3047:
case 741:
case 2529:
case 2445:
case 688:
case 985:
case 390:
case 1781:
case 2575:
case 1547:
case 1648:
case 3213:
case 3522:
case 1927:
case 4005:
case 2785:
case 1022:
case 3152:
case 3990:
case 2898:
case 1298:
case 4030:
case 3091:
case 1607:
case 165:
case 1450:
case 3853:
case 1508:
case 2360:
case 253:
case 2512:
case 2987:
case 4023:
case 3328:
case 921:
case 943:
case 3166:
case 3008:
case 1846:
case 3924:
case 2878:
case 1278:
case 3066:
case 3108:
case 56:
case 622:
case 2468:
case 2337:
case 1044:
case 1665:
case 3191:
case 2595:
case 1019:
case 3420:
case 2223:
case 3474:
case 3089:
case 1135:
case 2679:
case 109:
case 2625:
case 359:
case 1263:
case 2863:
case 2526:
case 692:
case 2031:
case 431:
case 3636:
case 2131:
case 991:
case 1374:
case 1000:
case 2473:
case 3224:
case 3500:
case 2056:
case 2543:
case 2955:
case 2010:
case 3094:
case 758:
case 968:
case 3033:
case 1141:
case 2653:
case 325:
case 3207:
case 3452:
case 2664:
case 3921:
case 98:
case 2580:
case 1717:
case 3316:
case 1386:
case 337:
case 1177:
case 3896:
case 3265:
case 777:
case 1041:
case 1369:
case 3194:
case 2110:
case 3654:
case 3102:
case 1347:
case 3746:
case 2188:
case 226:
case 3825:
case 2462:
case 1352:
case 1251:
case 877:
case 2034:
case 416:
case 811:
case 507:
case 1753:
case 406:
case 2134:
case 3469:
case 1371:
case 801:
case 1502:
case 3907:
case 395:
case 3723:
case 2617:
case 154:
case 2836:
case 1855:
case 3322:
case 1416:
case 3002:
case 1670:
case 858:
case 756:
case 2713:
case 1811:
case 2211:
case 3730:
case 2173:
case 3881:
case 3627:
case 2312:
case 2:
case 2560:
case 1308:
case 617:
case 1939:
case 1435:
case 3767:
case 1366:
case 4011:
case 2815:
case 3058:
case 3803:
case 3899:
case 3344:
case 1558:
case 160:
case 879:
case 3948:
case 3319:
case 298:
case 1389:
case 1642:
case 3832:
case 1940:
case 1613:
case 2482:
case 228:
case 3683:
case 779:
case 1784:
case 16:
case 3714:
case 884:
case 3985:
case 3120:
case 3749:
case 1050:
case 1915:
case 2804:
case 2343:
case 3489:
case 3074:
case 408:
case 1239:
case 3597:
case 1992:
case 1097:
case 3601:
case 634:
case 1520:
case 913:
case 3335:
case 1738:
case 565:
case 3466:
case 1574:
case 2911:
case 856:
case 451:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745110801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,];
var gg_b = "1745110801/";

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
