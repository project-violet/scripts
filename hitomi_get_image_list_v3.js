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
case 3189:
case 229:
case 822:
case 2930:
case 376:
case 1397:
case 960:
case 3558:
case 2765:
case 2736:
case 51:
case 457:
case 2080:
case 2514:
case 200:
case 1216:
case 341:
case 1440:
case 2469:
case 640:
case 2491:
case 3273:
case 4018:
case 3450:
case 3070:
case 307:
case 756:
case 1092:
case 2838:
case 1058:
case 968:
case 144:
case 1961:
case 444:
case 1457:
case 4092:
case 2075:
case 3410:
case 1077:
case 2000:
case 1429:
case 208:
case 3935:
case 2351:
case 3085:
case 1505:
case 2093:
case 648:
case 522:
case 3633:
case 3760:
case 2290:
case 1725:
case 2352:
case 2510:
case 881:
case 1545:
case 366:
case 1480:
case 952:
case 2619:
case 255:
case 3096:
case 8:
case 1091:
case 1069:
case 2243:
case 440:
case 1015:
case 1444:
case 3008:
case 1127:
case 4015:
case 4091:
case 4069:
case 1353:
case 3206:
case 1962:
case 2418:
case 1837:
case 2004:
case 978:
case 2835:
case 2477:
case 3045:
case 2866:
case 3414:
case 5:
case 1136:
case 2078:
case 2167:
case 2276:
case 2458:
case 2492:
case 3764:
case 710:
case 3591:
case 1493:
case 885:
case 1923:
case 3487:
case 3131:
case 2386:
case 448:
case 3938:
case 148:
case 1625:
case 2659:
case 581:
case 964:
case 251:
case 3286:
case 3733:
case 1728:
case 1351:
case 826:
case 3341:
case 3488:
case 778:
case 3937:
case 3302:
case 2241:
case 1507:
case 3749:
case 408:
case 887:
case 193:
case 3544:
case 2505:
case 3689:
case 1838:
case 2092:
case 2478:
case 2256:
case 4000:
case 1455:
case 3580:
case 604:
case 63:
case 1000:
case 3014:
case 3445:
case 1075:
case 2168:
case 2457:
case 1203:
case 764:
case 789:
case 1346:
case 2282:
case 752:
case 2239:
case 770:
case 3164:
case 358:
case 4044:
case 2216:
case 1921:
case 3133:
case 1415:
case 3007:
case 79:
case 1128:
case 3382:
case 3316:
case 2585:
case 1491:
case 3474:
case 2417:
case 1311:
case 2397:
case 2548:
case 3496:
case 3272:
case 1930:
case 4080:
case 257:
case 3624:
case 1395:
case 655:
case 1668:
case 1719:
case 429:
case 1080:
case 3862:
case 2484:
case 1736:
case 3575:
case 1386:
case 768:
case 2923:
case 1294:
case 3485:
case 451:
case 362:
case 2493:
case 803:
case 3517:
case 2574:
case 1312:
case 693:
case 2728:
case 151:
case 3899:
case 3649:
case 590:
case 1866:
case 2400:
case 1029:
case 1004:
case 1057:
case 2837:
case 3584:
case 316:
case 2475:
case 3047:
case 305:
case 774:
case 1167:
case 2313:
case 2596:
case 347:
case 1922:
case 57:
case 3470:
case 760:
case 1017:
case 1040:
case 600:
case 2091:
case 87:
case 3405:
case 890:
case 1418:
case 914:
case 2159:
case 1125:
case 240:
case 3529:
case 2480:
case 1963:
case 1510:
case 1547:
case 2201:
case 629:
case 3342:
case 3504:
case 1352:
case 1665:
case 155:
case 733:
case 1636:
case 503:
case 2557:
case 2504:
case 676:
case 2342:
case 3201:
case 3545:
case 166:
case 3480:
case 723:
case 2578:
case 2301:
case 466:
case 1252:
case 1821:
case 1096:
case 78:
case 254:
case 2631:
case 2405:
case 3826:
case 3091:
case 3069:
case 4008:
case 3015:
case 2253:
case 641:
case 112:
case 597:
case 412:
case 1149:
case 201:
case 1206:
case 1343:
case 2047:
case 2732:
case 3475:
case 3281:
case 607:
case 2789:
case 3055:
case 902:
case 2213:
case 42:
case 2381:
case 247:
case 2448:
case 3313:
case 183:
case 205:
case 3779:
case 884:
case 1591:
case 3574:
case 3493:
case 262:
case 2485:
case 3923:
case 4088:
case 1515:
case 3508:
case 1394:
case 3625:
case 3371:
case 1088:
case 1660:
case 742:
case 1733:
case 3728:
case 1383:
case 176:
case 1132:
case 2272:
case 3548:
case 439:
case 2496:
case 1592:
case 536:
case 666:
case 1558:
case 1295:
case 880:
case 476:
case 971:
case 579:
case 3767:
case 715:
case 3216:
case 4070:
case 2164:
case 3239:
case 3018:
case 4005:
case 612:
case 588:
case 3282:
case 2474:
case 1450:
case 3585:
case 441:
case 1834:
case 2382:
case 2007:
case 107:
case 3256:
case 1109:
case 1124:
case 145:
case 3058:
case 62:
case 2632:
case 344:
case 2823:
case 3457:
case 2014:
case 3429:
case 250:
case 2341:
case 3202:
case 580:
case 4085:
case 1518:
case 1935:
case 3628:
case 1085:
case 3505:
case 1822:
case 1633:
case 2544:
case 1760:
case 711:
case 3725:
case 2938:
case 2515:
case 672:
case 2131:
case 1485:
case 2764:
case 977:
case 3627:
case 2286:
case 2660:
case 2212:
case 1861:
case 1213:
case 2045:
case 3835:
case 1584:
case 3057:
case 1010:
case 105:
case 3492:
case 283:
case 416:
case 4047:
case 3276:
case 3167:
case 33:
case 1448:
case 1381:
case 2120:
case 553:
case 2454:
case 212:
case 1253:
case 2407:
case 3306:
case 3243:
case 906:
case 1050:
case 1631:
case 1405:
case 4050:
case 2206:
case 3125:
case 915:
case 1724:
case 2555:
case 3084:
case 2096:
case 2821:
case 1620:
case 746:
case 3768:
case 1301:
case 1578:
case 3619:
case 967:
case 2664:
case 2935:
case 2390:
case 2966:
case 662:
case 4087:
case 3507:
case 1302:
case 1087:
case 3554:
case 2251:
case 2760:
case 1749:
case 450:
case 2822:
case 2085:
case 1823:
case 3838:
case 245:
case 4014:
case 2109:
case 207:
case 1445:
case 1014:
case 647:
case 999:
case 3346:
case 1731:
case 4007:
case 4054:
case 891:
case 158:
case 1408:
case 1339:
case 458:
case 3415:
case 2070:
case 3128:
case 1007:
case 3587:
case 1382:
case 761:
case 2005:
case 2273:
case 3491:
case 1474:
case 3311:
case 2558:
case 2592:
case 1609:
case 276:
case 2383:
case 2189:
case 3395:
case 3668:
case 2577:
case 3514:
case 3719:
case 1500:
case 1862:
case 239:
case 2295:
case 3283:
case 1575:
case 3197:
case 2603:
case 2884:
case 453:
case 1183:
case 3021:
case 153:
case 37:
case 1656:
case 1907:
case 691:
case 1954:
case 547:
case 2905:
case 928:
case 505:
case 1781:
case 1815:
case 1228:
case 562:
case 3233:
case 632:
case 3786:
case 1026:
case 937:
case 3651:
case 2690:
case 2840:
case 854:
case 1641:
case 2333:
case 4026:
case 3980:
case 2794:
case 2116:
case 1279:
case 3808:
case 1855:
case 2829:
case 2035:
case 1324:
case 2066:
case 3798:
case 1103:
case 1309:
case 2804:
case 749:
case 1742:
case 2268:
case 284:
case 269:
case 4037:
case 862:
case 1438:
case 3993:
case 920:
case 2878:
case 3706:
case 2141:
case 847:
case 3526:
case 805:
case 731:
case 1616:
case 2102:
case 695:
case 1914:
case 2743:
case 3888:
case 501:
case 909:
case 996:
case 2142:
case 2676:
case 491:
case 3746:
case 2908:
case 619:
case 132:
case 2259:
case 1818:
case 3612:
case 924:
case 3260:
case 3063:
case 2360:
case 1143:
case 3034:
case 3359:
case 3153:
case 1522:
case 432:
case 2426:
case 1858:
case 2219:
case 3711:
case 3848:
case 387:
case 1466:
case 1601:
case 850:
case 1435:
case 2800:
case 2562:
case 3319:
case 872:
case 326:
case 2988:
case 1320:
case 2945:
case 1331:
case 3461:
case 3904:
case 3499:
case 3606:
case 288:
case 1782:
case 1739:
case 1534:
case 2643:
case 3885:
case 1716:
case 3022:
case 512:
case 883:
case 2530:
case 688:
case 2190:
case 3992:
case 1141:
case 82:
case 3099:
case 2639:
case 2914:
case 1743:
case 2616:
case 2742:
case 2037:
case 1857:
case 469:
case 484:
case 3697:
case 566:
case 1066:
case 1683:
case 1035:
case 1829:
case 1878:
case 4035:
case 3672:
case 1156:
case 2521:
case 2987:
case 3224:
case 184:
case 680:
case 796:
case 1690:
case 1817:
case 1840:
case 3379:
case 1364:
case 2026:
case 3850:
case 3434:
case 2228:
case 2815:
case 1561:
case 866:
case 1599:
case 1182:
case 52:
case 3195:
case 1884:
case 3918:
case 3535:
case 3111:
case 724:
case 1776:
case 812:
case 2781:
case 219:
case 2954:
case 2907:
case 2656:
case 3713:
case 3:
case 2910:
case 188:
case 541:
case 949:
case 2331:
case 1945:
case 3186:
case 2194:
case 1643:
case 845:
case 2534:
case 95:
case 3887:
case 2782:
case 807:
case 295:
case 3231:
case 1265:
case 3023:
case 576:
case 3797:
case 2892:
case 1219:
case 2858:
case 1875:
case 179:
case 4038:
case 1181:
case 3367:
case 539:
case 2601:
case 684:
case 3772:
case 2877:
case 2466:
case 3814:
case 839:
case 3249:
case 2741:
case 2225:
case 2818:
case 3430:
case 728:
case 2522:
case 876:
case 1694:
case 3325:
case 3854:
case 2349:
case 1360:
case 3198:
case 1703:
case 2950:
case 3991:
case 3969:
case 1974:
case 3421:
case 1523:
case 1101:
case 841:
case 1908:
case 46:
case 2915:
case 1940:
case 2969:
case 3950:
case 800:
case 391:
case 2062:
case 3681:
case 1746:
case 2613:
case 332:
case 1612:
case 1260:
case 508:
case 2249:
case 1751:
case 738:
case 1984:
case 829:
case 2854:
case 3702:
case 2325:
case 2671:
case 222:
case 3522:
case 1805:
case 2430:
case 1711:
case 426:
case 1652:
case 3176:
case 2220:
case 1795:
case 187:
case 2814:
case 3877:
case 3435:
case 3601:
case 1319:
case 808:
case 1365:
case 1336:
case 3320:
case 4022:
case 3331:
case 1929:
case 1461:
case 730:
case 1606:
case 2112:
case 3910:
case 3534:
case 1022:
case 2653:
case 3716:
case 1171:
case 1197:
case 2566:
case 1462:
case 3332:
case 3389:
case 2195:
case 47:
case 190:
case 353:
case 1021:
case 490:
case 2713:
case 1944:
case 17:
case 1172:
case 70:
case 1646:
case 53:
case 319:
case 66:
case 504:
case 3781:
case 3815:
case 1786:
case 1030:
case 2850:
case 2173:
case 1712:
case 1651:
case 3641:
case 1980:
case 4030:
case 281:
case 959:
case 1264:
case 1808:
case 2463:
case 982:
case 1695:
case 3103:
case 1798:
case 403:
case 198:
case 851:
case 2810:
case 2847:
case 2697:
case 3742:
case 3521:
case 1368:
case 1993:
case 1706:
case 1673:
case 2958:
case 3190:
case 83:
case 3616:
case 1900:
case 2977:
case 1975:
case 1112:
case 2773:
case 388:
case 2957:
case 2929:
case 1955:
case 3945:
case 1186:
case 2022:
case 844:
case 2885:
case 1887:
case 973:
case 294:
case 336:
case 287:
case 41:
case 2652:
case 1023:
case 2848:
case 2698:
case 3219:
case 3038:
case 2336:
case 379:
case 226:
case 3181:
case 2319:
case 3562:
case 11:
case 2113:
case 685:
case 1814:
case 2984:
case 3227:
case 1249:
case 2260:
case 2751:
case 3426:
case 2805:
case 3844:
case 2870:
case 1325:
case 122:
case 1671:
case 90:
case 1854:
case 1198:
case 3703:
case 3676:
case 544:
case 3142:
case 1969:
case 2917:
case 1915:
case 74:
case 26:
case 759:
case 3101:
case 6:
case 713:
case 1062:
case 1422:
case 721:
case 1958:
case 2673:
case 1151:
case 3948:
case 1099:
case 2975:
case 540:
case 3743:
case 1977:
case 2900:
case 3268:
case 1810:
case 1697:
case 485:
case 2798:
case 298:
case 643:
case 2845:
case 3683:
case 3829:
case 3035:
case 848:
case 1146:
case 2368:
case 203:
case 185:
case 384:
case 3840:
case 986:
case 2874:
case 481:
case 2651:
case 1173:
case 2712:
case 2233:
case 1434:
case 1463:
case 2808:
case 2264:
case 927:
case 3116:
case 3561:
case 1328:
case 181:
case 3182:
case 548:
case 622:
case 3333:
case 4:
case 2537:
case 840:
case 1918:
case 2462:
case 1111:
case 3776:
case 1232:
case 2646:
case 1713:
case 2172:
case 3723:
case 1280:
case 506:
case 811:
case 1666:
case 736:
case 3503:
case 1635:
case 1401:
case 3928:
case 1933:
case 4083:
case 3121:
case 1442:
case 3452:
case 420:
case 3254:
case 3590:
case 3207:
case 2989:
case 788:
case 3130:
case 1126:
case 2932:
case 3699:
case 2354:
case 2825:
case 2039:
case 1827:
case 577:
case 1200:
case 624:
case 3392:
case 34:
case 1348:
case 1137:
case 3583:
case 1003:
case 3377:
case 3762:
case 313:
case 2292:
case 2867:
case 2258:
case 2476:
case 437:
case 359:
case 3820:
case 1836:
case 3831:
case 428:
case 815:
case 696:
case 3486:
case 2002:
case 2387:
case 919:
case 511:
case 1766:
case 3832:
case 3623:
case 1638:
case 3889:
case 2042:
case 2737:
case 1513:
case 25:
case 58:
case 2001:
case 609:
case 1284:
case 1439:
case 2350:
case 2512:
case 1374:
case 3391:
case 3163:
case 3134:
case 2215:
case 3473:
case 620:
case 1217:
case 1240:
case 3799:
case 867:
case 3594:
case 3761:
case 325:
case 2138:
case 2347:
case 2310:
case 3809:
case 567:
case 637:
case 2552:
case 3013:
case 2255:
case 235:
case 4076:
case 3210:
case 3247:
case 3662:
case 991:
case 1441:
case 496:
case 2490:
case 1388:
case 3122:
case 1094:
case 542:
case 628:
case 3285:
case 1626:
case 1041:
case 2090:
case 228:
case 3199:
case 3161:
case 3516:
case 3582:
case 1387:
case 3734:
case 3539:
case 1595:
case 2137:
case 2481:
case 1277:
case 2348:
case 1135:
case 2597:
case 4056:
case 1166:
case 861:
case 2836:
case 3621:
case 3375:
case 1258:
case 1867:
case 791:
case 565:
case 2572:
case 635:
case 4082:
case 1932:
case 330:
case 3205:
case 3541:
case 3453:
case 4016:
case 1016:
case 220:
case 3344:
case 2370:
case 1825:
case 2859:
case 1354:
case 631:
case 3502:
case 2635:
case 2401:
case 2666:
case 3095:
case 2083:
case 3011:
case 2738:
case 1546:
case 209:
case 65:
case 3380:
case 3288:
case 3012:
case 1726:
case 3086:
case 3663:
case 3634:
case 2094:
case 1920:
case 2388:
case 3357:
case 1552:
case 3304:
case 871:
case 1310:
case 2456:
case 435:
case 2278:
case 2345:
case 1138:
case 224:
case 1931:
case 2076:
case 3378:
case 719:
case 3501:
case 2257:
case 2868:
case 1403:
case 1255:
case 875:
case 3340:
case 1512:
case 2416:
case 1879:
case 3208:
case 2482:
case 1586:
case 3006:
case 571:
case 2571:
case 979:
case 1269:
case 2240:
case 1215:
case 2043:
case 3622:
case 3833:
case 1737:
case 2638:
case 149:
case 45:
case 3052:
case 192:
case 2766:
case 4001:
case 3472:
case 2735:
case 1483:
case 2284:
case 1001:
case 3162:
case 1949:
case 2960:
case 4042:
case 3766:
case 1889:
case 3638:
case 1925:
case 994:
case 2162:
case 273:
case 121:
case 1315:
case 3482:
case 3416:
case 987:
case 4053:
case 2340:
case 2622:
case 1473:
case 926:
case 2274:
case 3240:
case 3571:
case 2123:
case 64:
case 125:
case 2329:
case 1355:
case 324:
case 3278:
case 2304:
case 1446:
case 4013:
case 2721:
case 818:
case 234:
case 1013:
case 20:
case 613:
case 3257:
case 1210:
case 1662:
case 425:
case 2663:
case 510:
case 396:
case 2919:
case 3441:
case 3388:
case 3094:
case 1122:
case 2634:
case 743:
case 2011:
case 1097:
case 3280:
case 4072:
case 1503:
case 2095:
case 3666:
case 3401:
case 2380:
case 71:
case 1121:
case 263:
case 3442:
case 2556:
case 514:
case 1452:
case 182:
case 1318:
case 1590:
case 621:
case 1207:
case 3126:
case 1130:
case 3859:
case 1406:
case 2344:
case 320:
case 1358:
case 1392:
case 3348:
case 459:
case 14:
case 1214:
case 3137:
case 3275:
case 1583:
case 3572:
case 2248:
case 2046:
case 3865:
case 2375:
case 2621:
case 1820:
case 3090:
case 2630:
case 1831:
case 2763:
case 238:
case 3293:
case 2734:
case 722:
case 2582:
case 2516:
case 2393:
case 2199:
case 328:
case 1288:
case 833:
case 568:
case 638:
case 1086:
case 1663:
case 3506:
case 1965:
case 3920:
case 1936:
case 2071:
case 3490:
case 3552:
case 2446:
case 2809:
case 3347:
case 3310:
case 790:
case 2824:
case 225:
case 3931:
case 2355:
case 1329:
case 1378:
case 860:
case 627:
case 3403:
case 922:
case 77:
case 3255:
case 10:
case 630:
case 2391:
case 2163:
case 1317:
case 874:
case 1208:
case 3350:
case 943:
case 1006:
case 221:
case 2250:
case 4006:
case 1274:
case 3291:
case 331:
case 3215:
case 2134:
case 1833:
case 1622:
case 3737:
case 3042:
case 1384:
case 349:
case 1098:
case 392:
case 2576:
case 1296:
case 533:
case 1927:
case 35:
case 3949:
case 1162:
case 173:
case 2925:
case 1471:
case 1285:
case 3494:
case 3573:
case 578:
case 2831:
case 1582:
case 1734:
case 9:
case 438:
case 3595:
case 2583:
case 186:
case 4046:
case 3277:
case 2214:
case 3135:
case 24:
case 2392:
case 2358:
case 3056:
case 1375:
case 127:
case 259:
case 76:
case 3476:
case 589:
case 3258:
case 3292:
case 213:
case 2377:
case 486:
case 3314:
case 3932:
case 1453:
case 889:
case 864:
case 2254:
case 3551:
case 282:
case 1270:
case 570:
case 1722:
case 3016:
case 2406:
case 3039:
case 3082:
case 3354:
case 794:
case 2661:
case 2849:
case 2979:
case 787:
case 1095:
case 2503:
case 2723:
case 463:
case 2498:
case 3546:
case 2452:
case 1556:
case 163:
case 4095:
case 2928:
case 673:
case 1380:
case 3032:
case 2842:
case 1704:
case 3089:
case 2755:
case 1524:
case 50:
case 689:
case 3614:
case 2677:
case 174:
case 2079:
case 1330:
case 678:
case 3326:
case 1995:
case 2459:
case 168:
case 944:
case 1118:
case 3105:
case 3687:
case 2972:
case 3170:
case 2028:
case 1784:
case 1589:
case 1532:
case 1951:
case 1467:
case 1158:
case 3941:
case 2175:
case 1068:
case 2881:
case 1680:
case 1266:
case 3902:
case 2100:
case 834:
case 3299:
case 3750:
case 2791:
case 2618:
case 957:
case 2769:
case 1717:
case 652:
case 2715:
case 1894:
case 3956:
case 3654:
case 2399:
case 371:
case 2533:
case 1883:
case 256:
case 1629:
case 2184:
case 1657:
case 2792:
case 464:
case 1604:
case 489:
case 3610:
case 3262:
case 1906:
case 3536:
case 3565:
case 189:
case 3196:
case 2953:
case 3872:
case 674:
case 1169:
case 708:
case 2140:
case 3174:
case 178:
case 302:
case 1428:
case 538:
case 1115:
case 3433:
case 668:
case 3108:
case 1479:
case 1334:
case 3049:
case 3787:
case 2839:
case 2157:
case 2468:
case 729:
case 1912:
case 3145:
case 4065:
case 2129:
case 1065:
case 1036:
case 940:
case 3223:
case 1019:
case 838:
case 214:
case 170:
case 2615:
case 2841:
case 2691:
case 2718:
case 1617:
case 1640:
case 530:
case 152:
case 3650:
case 452:
case 361:
case 3527:
case 3707:
case 886:
case 19:
case 2802:
case 1549:
case 260:
case 3774:
case 2740:
case 1769:
case 1618:
case 1791:
case 1564:
case 3812:
case 118:
case 929:
case 418:
case 3187:
case 1399:
case 1361:
case 3708:
case 1193:
case 3990:
case 3366:
case 2158:
case 2467:
case 1419:
case 3335:
case 323:
case 1465:
case 2532:
case 3420:
case 1436:
case 2784:
case 3114:
case 1100:
case 2068:
case 3806:
case 2911:
case 2425:
case 1997:
case 1459:
case 3983:
case 2995:
case 2330:
case 4028:
case 3154:
case 2693:
case 342:
case 4079:
case 1144:
case 410:
case 3033:
case 3230:
case 1226:
case 3788:
case 399:
case 367:
case 2729:
case 908:
case 656:
case 1692:
case 993:
case 1677:
case 2778:
case 821:
case 3976:
case 252:
case 3851:
case 1669:
case 2890:
case 859:
case 1718:
case 1691:
case 618:
case 813:
case 270:
case 2549:
case 1802:
case 1913:
case 955:
case 3608:
case 3705:
case 84:
case 1129:
case 2155:
case 3110:
case 3147:
case 306:
case 1468:
case 1157:
case 1067:
case 114:
case 2780:
case 3424:
case 315:
case 1971:
case 3409:
case 1856:
case 2036:
case 1178:
case 3696:
case 2115:
case 2428:
case 2531:
case 2998:
case 278:
case 3150:
case 2952:
case 2363:
case 2191:
case 3060:
case 311:
case 904:
case 2334:
case 1816:
case 2479:
case 3263:
case 2793:
case 2906:
case 3811:
case 1792:
case 2657:
case 1184:
case 54:
case 2629:
case 156:
case 3645:
case 3895:
case 377:
case 1953:
case 3943:
case 951:
case 559:
case 2775:
case 264:
case 882:
case 513:
case 2645:
case 3883:
case 3657:
case 1647:
case 1610:
case 465:
case 1262:
case 1536:
case 2489:
case 3520:
case 364:
case 1519:
case 3678:
case 2567:
case 1714:
case 2943:
case 3700:
case 1174:
case 3191:
case 3952:
case 2873:
case 2150:
case 378:
case 3531:
case 1433:
case 2234:
case 772:
case 1108:
case 3793:
case 3027:
case 2060:
case 1787:
case 2688:
case 983:
case 3803:
case 206:
case 2110:
case 3986:
case 3065:
case 2846:
case 1020:
case 2994:
case 3036:
case 215:
case 2424:
case 1223:
case 3019:
case 370:
case 758:
case 3890:
case 966:
case 3640:
case 352:
case 1031:
case 1650:
case 2976:
case 161:
case 1981:
case 1188:
case 2705:
case 671:
case 1754:
case 2525:
case 3744:
case 2770:
case 475:
case 2648:
case 3757:
case 3509:
case 3524:
case 2745:
case 2221:
case 267:
case 3600:
case 747:
case 1916:
case 535:
case 1568:
case 665:
case 1982:
case 175:
case 907:
case 2064:
case 762:
case 1326:
case 2983:
case 945:
case 2806:
case 3911:
case 368:
case 602:
case 2449:
case 3118:
case 1687:
case 1105:
case 299:
case 2788:
case 2230:
case 892:
case 1853:
case 849:
case 3843:
case 2154:
case 3693:
case 3784:
case 2420:
case 592:
case 117:
case 3951:
case 223:
case 2335:
case 941:
case 1941:
case 2366:
case 446:
case 3158:
case 3192:
case 2990:
case 1024:
case 146:
case 4024:
case 3068:
case 754:
case 417:
case 3177:
case 2114:
case 2796:
case 4009:
case 2903:
case 2812:
case 2579:
case 3740:
case 3717:
case 2774:
case 2886:
case 360:
case 3894:
case 2708:
case 2187:
case 701:
case 2605:
case 2431:
case 1851:
case 3718:
case 1222:
case 3802:
case 954:
case 1770:
case 2559:
case 1525:
case 1608:
case 2754:
case 261:
case 828:
case 2145:
case 1110:
case 1147:
case 415:
case 3104:
case 776:
case 314:
case 901:
case 68:
case 3067:
case 115:
case 1994:
case 3856:
case 1846:
case 1234:
case 2433:
case 809:
case 411:
case 1150:
case 1873:
case 2942:
case 905:
case 1688:
case 3025:
case 2787:
case 1060:
case 2901:
case 2108:
case 1785:
case 745:
case 1811:
case 2262:
case 3758:
case 667:
case 3655:
case 356:
case 177:
case 1895:
case 3953:
case 2714:
case 1567:
case 3362:
case 265:
case 1489:
case 2536:
case 1886:
case 3769:
case 1774:
case 3564:
case 1579:
case 2750:
case 2261:
case 1812:
case 2299:
case 1903:
case 318:
case 3533:
case 1605:
case 1187:
case 1431:
case 2607:
case 3399:
case 2654:
case 1670:
case 2024:
case 766:
case 2941:
case 3419:
case 123:
case 1335:
case 3465:
case 2009:
case 615:
case 1114:
case 3100:
case 896:
case 18:
case 3881:
case 3237:
case 3175:
case 1449:
case 1806:
case 596:
case 1983:
case 4033:
case 442:
case 2326:
case 142:
case 611:
case 1154:
case 1107:
case 3028:
case 2170:
case 3226:
case 1788:
case 2687:
case 1745:
case 1221:
case 972:
case 524:
case 3658:
case 677:
case 1648:
case 2747:
case 2032:
case 1852:
case 2982:
case 783:
case 2568:
case 3677:
case 2916:
case 0:
case 467:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755079202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,];
var gg_b = "1755079202/";

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
