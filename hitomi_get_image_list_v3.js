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
case 704:
case 310:
case 160:
case 3169:
case 3020:
case 3787:
case 1273:
case 2115:
case 2181:
case 945:
case 3735:
case 768:
case 777:
case 4068:
case 139:
case 1563:
case 3909:
case 1937:
case 2344:
case 2263:
case 3408:
case 2167:
case 2679:
case 1869:
case 180:
case 1299:
case 3584:
case 3597:
case 1085:
case 2424:
case 171:
case 3920:
case 3314:
case 1986:
case 687:
case 2116:
case 2210:
case 553:
case 915:
case 2481:
case 2632:
case 3521:
case 3062:
case 999:
case 3325:
case 1477:
case 496:
case 1802:
case 585:
case 520:
case 1252:
case 2638:
case 3736:
case 659:
case 3469:
case 722:
case 1398:
case 1646:
case 3240:
case 406:
case 3146:
case 909:
case 1380:
case 2558:
case 2124:
case 3102:
case 1602:
case 3445:
case 2838:
case 2832:
case 1723:
case 1510:
case 1086:
case 1465:
case 2401:
case 1570:
case 418:
case 942:
case 1890:
case 3666:
case 1882:
case 1948:
case 2768:
case 1942:
case 661:
case 3950:
case 1431:
case 1042:
case 1300:
case 897:
case 1048:
case 2454:
case 2936:
case 3188:
case 1778:
case 1006:
case 2270:
case 813:
case 1690:
case 3866:
case 582:
case 1905:
case 2961:
case 1741:
case 3707:
case 2720:
case 1739:
case 2087:
case 739:
case 177:
case 2094:
case 912:
case 760:
case 104:
case 3989:
case 3817:
case 3849:
case 3665:
case 4050:
case 2101:
case 1971:
case 3490:
case 188:
case 2935:
case 1753:
case 3089:
case 276:
case 2709:
case 843:
case 82:
case 1213:
case 3649:
case 1117:
case 2987:
case 725:
case 2819:
case 2847:
case 1005:
case 3234:
case 780:
case 1573:
case 3357:
case 397:
case 3881:
case 42:
case 1907:
case 98:
case 2085:
case 2333:
case 2645:
case 2869:
case 280:
case 3179:
case 51:
case 1263:
case 1893:
case 313:
case 1344:
case 239:
case 2937:
case 3953:
case 3681:
case 1181:
case 3432:
case 1115:
case 1879:
case 3297:
case 3867:
case 3193:
case 1007:
case 3039:
case 848:
case 2669:
case 307:
case 2608:
case 2723:
case 3078:
case 1467:
case 2086:
case 32:
case 3479:
case 54:
case 1838:
case 4053:
case 2392:
case 3742:
case 3221:
case 3624:
case 686:
case 629:
case 2398:
case 2646:
case 550:
case 1552:
case 3540:
case 1638:
case 3138:
case 752:
case 2802:
case 3493:
case 1632:
case 2258:
case 635:
case 2846:
case 666:
case 1481:
case 3972:
case 537:
case 2712:
case 3616:
case 2986:
case 3824:
case 2772:
case 2690:
case 401:
case 3023:
case 2778:
case 1176:
case 2006:
case 3676:
case 1454:
case 1936:
case 1560:
case 2048:
case 558:
case 3327:
case 2300:
case 2431:
case 579:
case 2882:
case 1768:
case 1036:
case 2906:
case 896:
case 3419:
case 491:
case 2570:
case 3012:
case 2329:
case 2131:
case 1819:
case 3785:
case 1847:
case 2005:
case 3801:
case 1987:
case 1528:
case 1154:
case 2149:
case 3654:
case 3251:
case 4023:
case 3737:
case 176:
case 294:
case 2971:
case 3204:
case 2165:
case 783:
case 3601:
case 1035:
case 3854:
case 85:
case 1094:
case 1647:
case 3243:
case 3595:
case 277:
case 268:
case 1087:
case 4018:
case 632:
case 2228:
case 391:
case 840:
case 2905:
case 3391:
case 2222:
case 2741:
case 755:
case 2152:
case 3546:
case 1756:
case 18:
case 2524:
case 2158:
case 2998:
case 3484:
case 2840:
case 963:
case 1216:
case 605:
case 574:
case 1821:
case 2516:
case 513:
case 2092:
case 695:
case 2499:
case 983:
case 3810:
case 2386:
case 44:
case 2640:
case 423:
case 3341:
case 1755:
case 1410:
case 3957:
case 1684:
case 1307:
case 3184:
case 1215:
case 882:
case 2277:
case 2452:
case 1577:
case 3353:
case 1884:
case 41:
case 350:
case 3569:
case 649:
case 1903:
case 2959:
case 1944:
case 2764:
case 3:
case 2337:
case 2581:
case 2199:
case 2033:
case 34:
case 3279:
case 323:
case 2385:
case 1267:
case 1897:
case 543:
case 862:
case 602:
case 1201:
case 1604:
case 1387:
case 3091:
case 2128:
case 1083:
case 1517:
case 2460:
case 1394:
case 1531:
case 3759:
case 234:
case 2231:
case 1843:
case 1804:
case 1983:
case 358:
case 2217:
case 3151:
case 1254:
case 4027:
case 1470:
case 2305:
case 1361:
case 3733:
case 1714:
case 1565:
case 2757:
case 3318:
case 2422:
case 591:
case 2160:
case 2029:
case 1030:
case 4091:
case 976:
case 3443:
case 853:
case 1336:
case 3590:
case 78:
case 479:
case 2696:
case 2348:
case 3798:
case 4064:
case 212:
case 1276:
case 1170:
case 2342:
case 1930:
case 2929:
case 501:
case 836:
case 858:
case 3140:
case 3246:
case 2224:
case 4014:
case 2621:
case 465:
case 145:
case 436:
case 3202:
case 1098:
case 831:
case 1499:
case 3858:
case 1516:
case 1727:
case 1092:
case 2463:
case 1992:
case 1980:
case 4026:
case 2216:
case 2110:
case 925:
case 980:
case 1998:
case 3368:
case 3025:
case 1840:
case 28:
case 3658:
case 1158:
case 879:
case 1152:
case 3652:
case 1385:
case 3014:
case 1199:
case 3245:
case 365:
case 3873:
case 1337:
case 3593:
case 199:
case 1959:
case 3926:
case 3440:
case 742:
case 1311:
case 320:
case 540:
case 2003:
case 3783:
case 3673:
case 1277:
case 3026:
case 385:
case 1059:
case 2044:
case 2697:
case 109:
case 1458:
case 2215:
case 2684:
case 3914:
case 2755:
case 353:
case 1791:
case 3496:
case 3974:
case 2714:
case 799:
case 2565:
case 1757:
case 3547:
case 3955:
case 3519:
case 2470:
case 2361:
case 2651:
case 1249:
case 2254:
case 3613:
case 2983:
case 715:
case 3134:
case 1634:
case 134:
case 1575:
case 3622:
case 1554:
case 3703:
case 2083:
case 1460:
case 2335:
case 2643:
case 1834:
case 2851:
case 3074:
case 4056:
case 482:
case 2604:
case 1265:
case 3956:
case 1306:
case 8:
case 745:
case 3495:
case 968:
case 977:
case 2930:
case 850:
case 2276:
case 1000:
case 2170:
case 84:
case 1342:
case 823:
case 362:
case 112:
case 3196:
case 3860:
case 3290:
case 1348:
case 3282:
case 2725:
case 3350:
case 1576:
case 1900:
case 1029:
case 1266:
case 1160:
case 4055:
case 1422:
case 3056:
case 382:
case 1512:
case 3100:
case 2127:
case 3206:
case 1600:
case 964:
case 2223:
case 573:
case 37:
case 1390:
case 1382:
case 679:
case 908:
case 3248:
case 2464:
case 3721:
case 2550:
case 3242:
case 1800:
case 1156:
case 658:
case 2758:
case 3129:
case 2752:
case 3060:
case 631:
case 392:
case 4028:
case 2491:
case 2212:
case 4022:
case 3922:
case 532:
case 3587:
case 789:
case 2051:
case 402:
case 1095:
case 3874:
case 3928:
case 221:
case 3594:
case 1289:
case 3349:
case 138:
case 769:
case 3271:
case 3784:
case 1174:
case 2043:
case 2589:
case 324:
case 4060:
case 1155:
case 544:
case 2683:
case 2773:
case 492:
case 3429:
case 2951:
case 1934:
case 3561:
case 730:
case 2319:
case 3797:
case 1345:
case 157:
case 1539:
case 2713:
case 1541:
case 2379:
case 2253:
case 3211:
case 305:
case 3826:
case 2803:
case 3498:
case 2844:
case 3480:
case 3492:
case 946:
case 2509:
case 2393:
case 4052:
case 61:
case 2084:
case 1553:
case 449:
case 3704:
case 130:
case 3999:
case 2241:
case 2644:
case 2097:
case 1659:
case 169:
case 319:
case 738:
case 227:
case 3814:
case 3073:
case 566:
case 854:
case 3286:
case 1770:
case 3180:
case 637:
case 2278:
case 1346:
case 3198:
case 1698:
case 2272:
case 1414:
case 1308:
case 3958:
case 405:
case 2562:
case 2568:
case 1302:
case 535:
case 1898:
case 990:
case 1426:
case 6:
case 495:
case 3058:
case 586:
case 529:
case 3459:
case 1880:
case 623:
case 916:
case 29:
case 1212:
case 581:
case 2474:
case 1491:
case 2523:
case 2455:
case 1218:
case 2710:
case 3506:
case 3130:
case 911:
case 2156:
case 2800:
case 1464:
case 1550:
case 2388:
case 628:
case 454:
case 561:
case 2390:
case 3740:
case 3627:
case 1223:
case 2096:
case 2512:
case 805:
case 849:
case 1319:
case 2934:
case 2456:
case 3430:
case 251:
case 3183:
case 1683:
case 1773:
case 3301:
case 727:
case 1191:
case 3864:
case 3294:
case 662:
case 1004:
case 1883:
case 3375:
case 1427:
case 354:
case 2763:
case 1943:
case 2289:
case 2095:
case 682:
case 1051:
case 2034:
case 3664:
case 3891:
case 3261:
case 1603:
case 3103:
case 2220:
case 269:
case 2833:
case 3585:
case 93:
case 1722:
case 3144:
case 2369:
case 230:
case 1084:
case 2553:
case 2425:
case 3963:
case 892:
case 1509:
case 1393:
case 3537:
case 3315:
case 289:
case 2209:
case 721:
case 3063:
case 1803:
case 1157:
case 1997:
case 3367:
case 133:
case 775:
case 1379:
case 2539:
case 1520:
case 1713:
case 3795:
case 2345:
case 947:
case 2578:
case 3586:
case 3010:
case 903:
case 665:
case 1338:
case 2262:
case 1921:
case 3444:
case 2880:
case 578:
case 636:
case 3403:
case 2940:
case 2302:
case 4063:
case 1568:
case 685:
case 559:
case 620:
case 2308:
case 587:
case 1457:
case 653:
case 3796:
case 1272:
case 2698:
case 1278:
case 993:
case 3910:
case 10:
case 2395:
case 3745:
case 1887:
case 1919:
case 1947:
case 2189:
case 2871:
case 361:
case 111:
case 3054:
case 4076:
case 1835:
case 298:
case 284:
case 3161:
case 1894:
case 3075:
case 2605:
case 3975:
case 2715:
case 2450:
case 208:
case 3436:
case 1687:
case 3283:
case 2255:
case 1418:
case 264:
case 1694:
case 1047:
case 3194:
case 1861:
case 2274:
case 2671:
case 381:
case 3001:
case 1635:
case 618:
case 3370:
case 2724:
case 3812:
case 3746:
case 2396:
case 2489:
case 1123:
case 866:
case 3623:
case 2088:
case 554:
case 2082:
case 3702:
case 4075:
case 73:
case 975:
case 1112:
case 2990:
case 2982:
case 3976:
case 3500:
case 747:
case 1118:
case 3487:
case 1636:
case 481:
case 2150:
case 2256:
case 829:
case 3823:
case 2046:
case 4067:
case 610:
case 487:
case 459:
case 3672:
case 2002:
case 1321:
case 1178:
case 2008:
case 956:
case 246:
case 3580:
case 3592:
case 478:
case 467:
case 2908:
case 2902:
case 606:
case 3924:
case 1441:
case 2162:
case 3878:
case 4081:
case 147:
case 1766:
case 2946:
case 2109:
case 99:
case 3067:
case 103:
case 711:
case 3981:
case 1472:
case 3839:
case 2611:
case 4024:
case 387:
case 1257:
case 3653:
case 2214:
case 640:
case 832:
case 3363:
case 359:
case 2685:
case 2775:
case 3559:
case 2754:
case 1139:
case 2226:
case 3107:
case 2120:
case 2468:
case 4016:
case 3853:
case 378:
case 117:
case 3015:
case 2837:
case 3244:
case 1093:
case 1765:
case 3081:
case 2701:
case 3967:
case 193:
case 844:
case 2635:
case 2412:
case 3171:
case 3328:
case 2694:
case 3322:
case 2291:
case 700:
case 314:
case 4066:
case 2687:
case 3949:
case 1715:
case 1564:
case 1450:
case 3442:
case 3105:
case 1605:
case 184:
case 3031:
case 198:
case 3017:
case 1871:
case 211:
case 3448:
case 1591:
case 790:
case 502:
case 2555:
case 1395:
case 3965:
case 2887:
case 2574:
case 3732:
case 601:
case 4065:
case 1150:
case 3650:
case 1256:
case 2636:
case 414:
case 3066:
case 867:
case 524:
case 1527:
case 2118:
case 344:
case 1988:
case 1990:
case 1848:
case 1982:
case 2112:
case 887:
case 938:
case 2123:
case 4017:
case 1088:
case 1606:
case 3200:
case 3106:
case 4049:
case 1489:
case 951:
case 3530:
case 3142:
case 2556:
case 1642:
case 3405:
case 1420:
case 2032:
case 519:
case 3662:
case 1162:
case 613:
case 881:
case 486:
case 429:
case 926:
case 1908:
case 146:
case 3437:
case 435:
case 2321:
case 3862:
case 3186:
case 1686:
case 3298:
case 1002:
case 505:
case 1340:
case 3411:
case 2453:
case 2525:
case 969:
case 3485:
case 23:
case 2932:
case 861:
case 1046:
case 708:
case 2979:
case 2765:
case 1945:
case 2514:
case 62:
case 643:
case 3259:
case 2093:
case 549:
case 386:
case 1837:
case 3809:
case 329:
case 1069:
case 217:
case 100:
case 3620:
case 2384:
case 2139:
case 1120:
case 3077:
case 3977:
case 335:
case 190:
case 1754:
case 1969:
case 2749:
case 2717:
case 3544:
case 1685:
case 3111:
case 2472:
case 2478:
case 3486:
case 203:
case 1637:
case 366:
case 2079:
case 1109:
case 2736:
case 240:
case 3638:
case 1138:
case 868:
case 877:
case 2325:
case 2062:
case 9:
case 3632:
case 3415:
case 1972:
case 483:
case 4007:
case 3210:
case 1978:
case 94:
case 1824:
case 143:
case 1078:
case 894:
case 3832:
case 12:
case 1479:
case 2445:
case 1072:
case 888:
case 1816:
case 3558:
case 3124:
case 600:
case 3552:
case 2240:
case 2146:
case 2794:
case 3344:
case 791:
case 2909:
case 1771:
case 1681:
case 646:
case 3599:
case 3879:
case 1615:
case 1432:
case 58:
case 3115:
case 1041:
case 1297:
case 1867:
case 383:
case 3007:
case 1039:
case 107:
case 210:
case 2169:
case 1438:
case 3573:
case 1357:
case 3907:
case 2446:
case 1881:
case 3424:
case 1705:
case 1941:
case 2877:
case 2402:
case 2584:
case 1815:
case 3679:
case 1179:
case 2009:
case 3167:
case 113:
case 363:
case 3893:
case 1204:
case 3035:
case 1854:
case 2817:
case 2989:
case 707:
case 2831:
case 3619:
case 1119:
case 4036:
case 3647:
case 218:
case 774:
case 1595:
case 191:
case 3720:
case 2374:
case 3087:
case 3522:
case 1675:
case 3061:
case 3819:
case 2295:
case 101:
case 713:
case 1251:
case 3528:
case 2649:
case 3476:
case 1364:
case 2488:
case 376:
case 2089:
case 2543:
case 3709:
case 2504:
case 1711:
case 2482:
case 698:
case 4035:
case 860:
case 3768:
case 2666:
case 958:
case 3036:
case 4094:
case 248:
case 1012:
case 3330:
case 931:
case 1596:
case 3401:
case 2296:
case 2866:
case 880:
case 2182:
case 825:
case 1912:
case 1918:
case 3176:
case 3270:
case 1676:
case 2188:
case 1023:
case 72:
case 3454:
case 3936:
case 871:
case 1327:
case 608:
case 979:
case 1146:
case 2748:
case 1968:
case 920:
case 3380:
case 4011:
case 480:
case 1962:
case 617:
case 2221:
case 1445:
case 243:
case 2706:
case 953:
case 3608:
case 2078:
case 748:
case 2616:
case 3712:
case 2972:
case 1521:
case 2132:
case 3258:
case 3808:
case 2493:
case 3802:
case 439:
case 140:
case 1469:
case 2540:
case 2138:
case 2815:
case 2179:
case 1009:
case 3869:
case 3011:
case 380:
case 3299:
case 1145:
case 325:
case 3645:
case 1402:
case 1597:
case 3333:
case 2941:
case 1920:
case 1446:
case 371:
case 1314:
case 2357:
case 4086:
case 207:
case 2438:
case 3177:
case 2039:
case 1787:
case 3845:
case 2041:
case 2867:
case 2615:
case 2432:
case 2771:
case 1326:
case 3911:
case 1735:
case 2953:
case 339:
case 718:
case 1490:
case 1482:
case 3971:
case 3753:
case 1504:
case 4042:
case 2711:
case 4048:
case 512:
case 1089:
case 2737:
case 1543:
case 2364:
case 1488:
case 2251:
case 706:
case 3117:
case 1649:
case 2654:
case 1295:
case 422:
case 201:
case 2801:
case 2675:
case 2785:
case 3005:
case 982:
case 3131:
case 1234:
case 3741:
case 3228:
case 291:
case 1551:
case 2595:
case 2875:
case 2147:
case 1989:
case 304:
case 1831:
case 1817:
case 2601:
case 1665:
case 3165:
case 3431:
case 488:
case 2327:
case 3042:
case 494:
case 3417:
case 2786:
case 2676:
case 1188:
case 3688:
case 542:
case 2918:
case 322:
case 4005:
case 2912:
case 1296:
case 3690:
case 3682:
case 1182:
case 855:
case 2012:
case 2596:
case 1356:
case 740:
case 3570:
case 2419:
case 468:
case 2447:
case 3882:
case 3948:
case 3166:
case 1666:
case 404:
case 1050:
case 883:
case 4071:
case 534:
case 120:
case 1783:
case 1673:
case 2293:
case 309:
case 1320:
case 2545:
case 237:
case 2957:
case 3567:
case 3933:
case 728:
case 2341:
case 223:
case 2279:
case 3033:
case 1699:
case 2057:
case 3581:
case 3199:
case 69:
case 1873:
case 315:
case 1245:
case 165:
case 445:
case 3959:
case 3764:
case 940:
case 3311:
case 4080:
case 2353:
case 3980:
case 2610:
case 782:
case 3840:
case 1368:
case 2232:
case 3524:
case 2497:
case 3473:
case 3152:
case 1652:
case 560:
case 2546:
case 633:
case 2238:
case 910:
case 571:
case 1140:
case 1538:
case 3640:
case 627:
case 2121:
case 3386:
case 2810:
case 525:
case 1202:
case 3098:
case 345:
case 1925:
case 499:
case 3499:
case 580:
case 21:
case 1858:
case 3516:
case 3080:
case 2700:
case 2404:
case 434:
case 3576:
case 504:
case 2588:
case 1350:
case 3900:
case 2927:
case 568:
case 3160:
case 2870:
case 3422:
case 1056:
case 182:
case 2318:
case 621:
case 1434:
case 2323:
case 3306:
case 918:
case 3929:
case 1288:
case 2780:
case 3000:
case 162:
case 2798:
case 1860:
case 1290:
case 2759:
case 1744:
case 2964:
case 1703:
case 128:
case 4029:
case 2091:
case 2219:
case 720:
case 1055:
case 1813:
case 3895:
case 3265:
case 231:
case 1496:
case 3501:
case 342:
case 1519:
case 1822:
case 2991:
case 3305:
case 3113:
case 4000:
case 3217:
case 1195:
case 765:
case 2064:
case 1134:
case 3231:
case 3577:
case 1353:
case 2926:
case 3884:
case 46:
case 731:
case 236:
case 1:
case 2873:
case 2245:
case 265:
case 2699:
case 1057:
case 2014:
case 14:
case 1279:
case 3897:
case 2579:
case 92:
case 3755:
case 1545:
case 2914:
case 137:
case 3684:
case 3774:
case 2320:
case 3307:
case 3044:
case 1863:
case 3003:
case 2673:
case 2783:
case 2269:
case 842:
case 630:
case 2208:
case 563:
case 11:
case 36:
case 2858:
case 2202:
case 1810:
case 1378:
case 1121:
case 3224:
case 2140:
case 1729:
case 2730:
case 1497:
case 1232:
case 3756:
case 2025:
case 1484:
case 626:
case 1610:
case 4003:
case 3216:
case 3110:
case 2362:
case 2282:
case 2196:
case 2860:
case 576:
case 1792:
case 638:
case 1780:
case 3276:
case 1027:
case 3170:
case 991:
case 3566:
case 2495:
case 2434:
case 2956:
case 282:
case 1318:
case 1312:
case 901:
case 1443:
case 4083:
case 1588:
case 1590:
case 3336:
case 1582:
case 3725:
case 2134:
case 1064:
case 723:
case 3804:
case 2195:
case 2613:
case 3651:
case 2822:
case 3361:
case 1733:
case 2547:
case 7:
case 845:
case 131:
case 2828:
case 2496:
case 2074:
case 3851:
case 2813:
case 2055:
case 4030:
case 1247:
case 3643:
case 1219:
case 1143:
case 3335:
case 228:
case 3517:
case 3083:
case 3394:
case 3531:
case 1759:
case 2622:
case 737:
case 3799:
case 2317:
case 3883:
case 154:
case 1375:
case 321:
case 2013:
case 2587:
case 1261:
case 2922:
case 1664:
case 2022:
case 2913:
case 1183:
case 2028:
case 3773:
case 1301:
case 224:
case 3589:
case 612:
case 1235:
case 3550:
case 857:
case 970:
case 2536:
case 634:
case 2248:
case 1740:
case 511:
case 826:
case 4051:
case 889:
case 2100:
case 1070:
case 3127:
case 2206:
case 1627:
case 3830:
case 981:
case 2366:
case 642:
case 1970:
case 3491:
case 292:
case 1483:
case 3630:
case 2129:
case 1236:
case 1548:
case 3758:
case 1542:
case 4004:
case 1827:
case 967:
case 978:
case 2825:
case 3562:
case 3457:
case 433:
case 2198:
case 2192:
case 2286:
case 1324:
case 2180:
case 615:
case 1010:
case 1586:
case 39:
case 427:
case 593:
case 2625:
case 838:
case 2459:
case 959:
case 4084:
case 249:
case 517:
case 456:
case 1403:
case 699:
case 3844:
case 3803:
case 2498:
case 205:
case 3984:
case 1657:
case 2211:
case 3997:
case 1367:
case 2285:
case 3379:
case 1734:
case 53:
case 2507:
case 2751:
case 3520:
case 1795:
case 49:
case 1207:
case 3603:
case 1381:
case 2073:
case 2814:
case 327:
case 1585:
case 219:
case 2159:
case 3097:
case 3241:
case 2999:
case 3084:
case 2377:
case 1511:
case 1963:
case 3509:
case 3393:
case 1537:
case 645:
case 719:
case 338:
case 89:
case 124:
case 3155:
case 1655:
case 2287:
case 1365:
case 2183:
case 2301:
case 3456:
case 1561:
case 1797:
case 1022:
case 2891:
case 2664:
case 1587:
case 1874:
case 1331:
case 80:
case 254:
case 1400:
case 1349:
case 2354:
case 2571:
case 438:
case 2827:
case 3250:
case 1656:
case 3156:
case 508:
case 3629:
case 2236:
case 1060:
case 564:
case 856:
case 451:
case 3474:
case 749:
case 3829:
case 4034:
case 1100:
case 2070:
case 4095:
case 1856:
case 598:
case 584:
case 1242:
case 3388:
case 2376:
case 3898:
case 792:
case 1058:
case 2316:
case 2444:
case 3880:
case 430:
case 3892:
case 3262:
case 1625:
case 2586:
case 3578:
case 1433:
case 2910:
case 516:
case 1286:
case 3680:
case 3698:
case 875:
case 3414:
case 3308:
case 929:
case 1958:
case 702:
case 3302:
case 1825:
case 489:
case 2315:
case 2963:
case 2537:
case 3553:
case 1377:
case 66:
case 3369:
case 1159:
case 2144:
case 2585:
case 119:
case 724:
case 2857:
case 3126:
case 3220:
case 2207:
case 1626:
case 2381:
case 2103:
case 1973:
case 357:
case 3345:
case 3539:
case 3541:
case 2734:
case 2367:
case 2657:
case 1099:
case 1614:
case 3114:
case 1498:
case 105:
case 1492:
case 2063:
case 1480:
case 389:
case 4040:
case 326:
case 1133:
case 546:
case 484:
case 1200:
case 1106:
case 2708:
case 3088:
case 2623:
case 1530:
case 1148:
case 2818:
case 2370:
case 1405:
case 3724:
case 1142:
case 2461:
case 3806:
case 3256:
case 2136:
case 1738:
case 551:
case 817:
case 2487:
case 144:
case 3527:
case 3988:
case 2976:
case 408:
case 1105:
case 2075:
case 3605:
case 83:
case 4082:
case 1031:
case 384:
case 3871:
case 1689:
case 3767:
case 1406:
case 2745:
case 2901:
case 652:
case 729:
case 281:
case 2001:
case 1171:
case 1328:
case 3274:
case 97:
case 3805:
case 847:
case 2187:
case 308:
case 270:
case 1917:
case 3450:
case 1931:
case 3564:
case 1793:
case 2975:
case 1977:
case 446:
case 135:
case 773:
case 4008:
case 841:
case 3969:
case 2559:
case 1185:
case 2363:
case 3611:
case 287:
case 1820:
case 3045:
case 2839:
case 1486:
case 2067:
case 166:
case 3109:
case 1609:
case 316:
case 1719:
case 2533:
case 2081:
case 3701:
case 1373:
case 2244:
case 1259:
case 186:
case 3837:
case 129:
case 3811:
case 267:
case 3069:
case 3468:
case 2203:
case 1620:
case 2639:
case 1077:
case 3120:
case 589:
case 2916:
case 3409:
case 1437:
case 346:
case 655:
case 490:
case 1186:
case 2782:
case 1868:
case 3002:
case 4045:
case 683:
case 416:
case 3168:
case 3946:
case 744:
case 569:
case 1662:
case 3162:
case 2598:
case 1352:
case 663:
case 3908:
case 4069:
case 2592:
case 1612:
case 1435:
case 3112:
case 694:
case 2471:
case 2360:
case 688:
case 1976:
case 1494:
case 3118:
case 244:
case 954:
case 800:
case 2066:
case 4047:
case 1230:
case 3636:
case 1136:
case 2738:
case 2650:
case 1823:
case 1370:
case 677:
case 2142:
case 3556:
case 1461:
case 1812:
case 1746:
case 2966:
case 521:
case 1529:
case 2148:
case 3227:
case 2200:
case 1076:
case 2106:
case 816:
case 1708:
case 1702:
case 3836:
case 1975:
case 2931:
case 1436:
case 170:
case 1283:
case 3304:
case 3777:
case 214:
case 767:
case 3861:
case 3291:
case 3694:
case 181:
case 1001:
case 2171:
case 2328:
case 622:
case 2065:
case 1135:
case 3635:
case 3412:
case 3351:
case 2313:
case 1745:
case 2965:
case 1901:
case 273:
case 846:
case 3423:
case 3919:
case 441:
case 2689:
case 2779:
case 311:
case 2448:
case 2583:
case 2049:
case 787:
case 2031:
case 1075:
case 3264:
case 3661:
case 3384:
case 3607:
case 1639:
case 2077:
case 178:
case 317:
case 1015:
case 3093:
case 1641:
case 3765:
case 3514:
case 4038:
case 1967:
case 2747:
case 1533:
case 447:
case 3979:
case 770:
case 2233:
case 2137:
case 1067:
case 3478:
case 3807:
case 43:
case 1839:
case 3472:
case 187:
case 3993:
case 1363:
case 159:
case 2544:
case 3731:
case 3526:
case 2399:
case 625:
case 2358:
case 1580:
case 1016:
case 680:
case 417:
case 2352:
case 4093:
case 1924:
case 671:
case 1310:
case 493:
case 347:
case 527:
case 1407:
case 3766:
case 4079:
case 898:
case 3938:
case 33:
case 1024:
case 2485:
case 884:
case 660:
case 3525:
case 2411:
case 1790:
case 639:
case 3172:
case 3178:
case 2862:
case 2292:
case 1916:
case 2437:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758297601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,];
var gg_b = "1758297601/";

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
