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
case 4033:
case 356:
case 1236:
case 238:
case 1602:
case 1976:
case 1201:
case 1781:
case 911:
case 3407:
case 201:
case 234:
case 978:
case 939:
case 2073:
case 1472:
case 2732:
case 1113:
case 1030:
case 3062:
case 2686:
case 3920:
case 1783:
case 2468:
case 796:
case 3788:
case 781:
case 4020:
case 3118:
case 823:
case 540:
case 184:
case 3640:
case 2139:
case 3067:
case 321:
case 2654:
case 2891:
case 1477:
case 902:
case 1766:
case 1675:
case 2499:
case 2663:
case 188:
case 212:
case 1021:
case 2228:
case 1023:
case 2159:
case 1607:
case 3933:
case 2661:
case 2634:
case 1088:
case 2703:
case 1606:
case 1232:
case 1651:
case 89:
case 3004:
case 2642:
case 1767:
case 1894:
case 1169:
case 965:
case 2701:
case 2682:
case 3907:
case 129:
case 1458:
case 2736:
case 3975:
case 700:
case 1318:
case 1631:
case 4075:
case 2445:
case 11:
case 3193:
case 1905:
case 3902:
case 2687:
case 746:
case 3313:
case 3043:
case 1728:
case 2968:
case 337:
case 3839:
case 3311:
case 3638:
case 860:
case 280:
case 2744:
case 2114:
case 2595:
case 2394:
case 3431:
case 2999:
case 382:
case 1620:
case 616:
case 3859:
case 3658:
case 2060:
case 2035:
case 2647:
case 722:
case 871:
case 1544:
case 3012:
case 3342:
case 1345:
case 1163:
case 818:
case 2175:
case 2217:
case 534:
case 2709:
case 501:
case 2289:
case 2528:
case 1876:
case 373:
case 1858:
case 1494:
case 1326:
case 579:
case 853:
case 3127:
case 3573:
case 4014:
case 3792:
case 351:
case 1584:
case 1154:
case 1838:
case 3370:
case 1385:
case 2885:
case 3122:
case 3459:
case 887:
case 1501:
case 2611:
case 663:
case 1556:
case 465:
case 2826:
case 769:
case 3319:
case 3797:
case 3831:
case 198:
case 3914:
case 2358:
case 8:
case 3853:
case 2376:
case 665:
case 3347:
case 194:
case 3017:
case 1096:
case 3806:
case 3168:
case 1536:
case 2102:
case 832:
case 2993:
case 786:
case 3694:
case 463:
case 791:
case 2212:
case 2295:
case 1537:
case 1368:
case 368:
case 1147:
case 752:
case 3346:
case 4039:
case 3016:
case 3807:
case 402:
case 26:
case 2827:
case 1209:
case 1789:
case 1399:
case 3386:
case 3796:
case 1840:
case 2566:
case 364:
case 1322:
case 4059:
case 3210:
case 1712:
case 159:
case 3555:
case 2010:
case 3185:
case 2340:
case 733:
case 3959:
case 3715:
case 2541:
case 3354:
case 3414:
case 148:
case 611:
case 2899:
case 392:
case 1327:
case 2131:
case 639:
case 3279:
case 678:
case 3126:
case 103:
case 2216:
case 2583:
case 144:
case 3560:
case 3939:
case 2106:
case 674:
case 735:
case 3802:
case 2918:
case 1092:
case 2493:
case 2581:
case 2151:
case 2854:
case 2691:
case 695:
case 2138:
case 3557:
case 3119:
case 3187:
case 3209:
case 1386:
case 1796:
case 3994:
case 2861:
case 587:
case 297:
case 2229:
case 3749:
case 1807:
case 2588:
case 693:
case 812:
case 225:
case 3537:
case 1875:
case 495:
case 3614:
case 1363:
case 879:
case 838:
case 24:
case 2375:
case 1095:
case 553:
case 2307:
case 2297:
case 3029:
case 1535:
case 514:
case 1939:
case 3877:
case 3532:
case 1334:
case 348:
case 2886:
case 1414:
case 276:
case 2009:
case 555:
case 1126:
case 4094:
case 518:
case 359:
case 1555:
case 3182:
case 1354:
case 1715:
case 1792:
case 3584:
case 260:
case 645:
case 1370:
case 3838:
case 957:
case 2140:
case 175:
case 3385:
case 3795:
case 2618:
case 2331:
case 619:
case 2364:
case 3326:
case 754:
case 2530:
case 2565:
case 1127:
case 1573:
case 408:
case 758:
case 3161:
case 2847:
case 173:
case 2353:
case 431:
case 3858:
case 2172:
case 749:
case 2998:
case 3544:
case 2351:
case 362:
case 1342:
case 2180:
case 3015:
case 42:
case 2521:
case 985:
case 2842:
case 2105:
case 472:
case 3146:
case 2779:
case 1439:
case 126:
case 3096:
case 1017:
case 2177:
case 1806:
case 3556:
case 983:
case 1199:
case 1864:
case 1319:
case 1049:
case 3716:
case 398:
case 62:
case 1459:
case 1122:
case 3501:
case 3125:
case 2882:
case 1975:
case 1420:
case 485:
case 92:
case 3318:
case 3980:
case 789:
case 3048:
case 2963:
case 2057:
case 525:
case 2447:
case 972:
case 1066:
case 330:
case 1907:
case 329:
case 683:
case 2961:
case 3633:
case 2685:
case 2339:
case 766:
case 1004:
case 3767:
case 232:
case 2274:
case 1260:
case 1235:
case 3606:
case 2954:
case 2359:
case 3232:
case 3653:
case 4040:
case 1730:
case 1765:
case 2773:
case 1433:
case 1658:
case 457:
case 2529:
case 3074:
case 1081:
case 271:
case 2592:
case 3620:
case 1041:
case 3977:
case 137:
case 1453:
case 2052:
case 1750:
case 214:
case 1406:
case 1510:
case 2600:
case 1224:
case 253:
case 1193:
case 3509:
case 2248:
case 4072:
case 3728:
case 2442:
case 3278:
case 3256:
case 2463:
case 2699:
case 3393:
case 3203:
case 2760:
case 2735:
case 1475:
case 1774:
case 3976:
case 3781:
case 3111:
case 3590:
case 2622:
case 3050:
case 3236:
case 45:
case 2515:
case 3741:
case 2221:
case 3602:
case 2919:
case 2668:
case 3938:
case 1677:
case 2454:
case 2223:
case 890:
case 3440:
case 4038:
case 1748:
case 2596:
case 728:
case 770:
case 1933:
case 1369:
case 3766:
case 1964:
case 1680:
case 2486:
case 2036:
case 993:
case 1672:
case 4076:
case 1640:
case 4058:
case 121:
case 3284:
case 2001:
case 1953:
case 110:
case 2942:
case 724:
case 1951:
case 1208:
case 2003:
case 2078:
case 1118:
case 2230:
case 4022:
case 3756:
case 1954:
case 1:
case 652:
case 3516:
case 1597:
case 564:
case 3281:
case 1274:
case 3642:
case 132:
case 1934:
case 3670:
case 1339:
case 996:
case 3024:
case 2255:
case 1447:
case 1057:
case 2579:
case 452:
case 898:
case 1626:
case 1813:
case 435:
case 2313:
case 3968:
case 2043:
case 1442:
case 778:
case 2902:
case 720:
case 739:
case 3619:
case 3687:
case 153:
case 3055:
case 2224:
case 3266:
case 1946:
case 3744:
case 380:
case 2406:
case 1600:
case 2510:
case 2191:
case 2750:
case 2041:
case 441:
case 2453:
case 1052:
case 2638:
case 3204:
case 3394:
case 433:
case 2431:
case 171:
case 1771:
case 2081:
case 3114:
case 118:
case 641:
case 1529:
case 3922:
case 774:
case 2083:
case 1482:
case 2859:
case 3485:
case 1470:
case 2028:
case 575:
case 2677:
case 3427:
case 1869:
case 1314:
case 1987:
case 922:
case 1919:
case 3752:
case 1221:
case 1084:
case 301:
case 3071:
case 334:
case 1947:
case 859:
case 946:
case 1461:
case 3625:
case 1434:
case 2920:
case 1760:
case 3008:
case 2475:
case 1699:
case 3686:
case 803:
case 3073:
case 3732:
case 1265:
case 1056:
case 2118:
case 3945:
case 2398:
case 2208:
case 2788:
case 2402:
case 18:
case 3893:
case 2953:
case 1001:
case 526:
case 900:
case 3139:
case 2067:
case 1446:
case 691:
case 312:
case 2931:
case 2814:
case 2369:
case 3926:
case 469:
case 3634:
case 1970:
case 2933:
case 3757:
case 3661:
case 1498:
case 3504:
case 888:
case 1863:
case 1302:
case 2875:
case 3295:
case 3305:
case 4018:
case 986:
case 1176:
case 2807:
case 2346:
case 1229:
case 1158:
case 1911:
case 197:
case 400:
case 36:
case 1548:
case 3827:
case 600:
case 3079:
case 2210:
case 3566:
case 2524:
case 2325:
case 1691:
case 47:
case 3541:
case 2354:
case 1825:
case 2185:
case 3133:
case 2555:
case 817:
case 2126:
case 3131:
case 292:
case 1886:
case 3543:
case 582:
case 446:
case 537:
case 2939:
case 3491:
case 3583:
case 2560:
case 1846:
case 3216:
case 3151:
case 67:
case 3581:
case 3669:
case 2145:
case 2363:
case 1550:
case 3175:
case 935:
case 2820:
case 1351:
case 1413:
case 2012:
case 1172:
case 1998:
case 53:
case 3107:
case 1353:
case 1411:
case 4091:
case 3528:
case 1296:
case 1306:
case 3709:
case 2127:
case 1565:
case 1969:
case 1618:
case 1331:
case 1887:
case 275:
case 1140:
case 1333:
case 2370:
case 1090:
case 3800:
case 2382:
case 2571:
case 251:
case 160:
case 830:
case 3567:
case 1870:
case 3338:
case 2833:
case 2459:
case 2797:
case 2387:
case 2049:
case 3613:
case 242:
case 681:
case 2199:
case 1523:
case 1177:
case 340:
case 521:
case 2347:
case 2017:
case 3991:
case 481:
case 3376:
case 510:
case 496:
case 3358:
case 2694:
case 3418:
case 3212:
case 1105:
case 1842:
case 19:
case 2851:
case 3102:
case 3333:
case 2795:
case 2838:
case 837:
case 60:
case 2639:
case 3090:
case 2584:
case 3530:
case 1249:
case 2326:
case 3969:
case 3331:
case 3618:
case 3887:
case 2494:
case 1528:
case 2161:
case 3847:
case 3296:
case 1217:
case 1289:
case 3550:
case 1175:
case 2345:
case 3413:
case 736:
case 3998:
case 1418:
case 1212:
case 3105:
case 3320:
case 1993:
case 39:
case 1102:
case 1845:
case 3523:
case 3177:
case 294:
case 3779:
case 1991:
case 424:
case 2716:
case 588:
case 1613:
case 2578:
case 2300:
case 1567:
case 1338:
case 3870:
case 1885:
case 821:
case 3138:
case 1566:
case 2840:
case 2322:
case 783:
case 810:
case 466:
case 16:
case 323:
case 2119:
case 3588:
case 529:
case 2749:
case 2097:
case 3834:
case 489:
case 397:
case 2147:
case 785:
case 3498:
case 2614:
case 2880:
case 3292:
case 3863:
case 3913:
case 2872:
case 2805:
case 2142:
case 1372:
case 205:
case 51:
case 1493:
case 958:
case 1669:
case 1868:
case 1918:
case 2532:
case 856:
case 3846:
case 407:
case 1216:
case 190:
case 1164:
case 757:
case 913:
case 83:
case 3009:
case 1698:
case 248:
case 1543:
case 3886:
case 2182:
case 3825:
case 1010:
case 1133:
case 259:
case 1008:
case 892:
case 562:
case 3463:
case 731:
case 704:
case 3898:
case 415:
case 2113:
case 654:
case 458:
case 1073:
case 2472:
case 1732:
case 2278:
case 2590:
case 2958:
case 745:
case 1625:
case 2976:
case 2781:
case 2391:
case 907:
case 3668:
case 3869:
case 179:
case 3987:
case 3314:
case 3044:
case 1512:
case 413:
case 649:
case 2236:
case 1646:
case 708:
case 1900:
case 2743:
case 615:
case 454:
case 4082:
case 2938:
case 743:
case 3425:
case 1757:
case 1661:
case 2607:
case 1228:
case 1422:
case 2023:
case 2021:
case 3250:
case 4019:
case 1663:
case 288:
case 868:
case 598:
case 2244:
case 3724:
case 1926:
case 2675:
case 1891:
case 3001:
case 1654:
case 1139:
case 864:
case 3446:
case 72:
case 3078:
case 2405:
case 3003:
case 772:
case 1262:
case 3057:
case 2198:
case 2972:
case 1243:
case 2980:
case 2048:
case 3626:
case 1736:
case 1670:
case 387:
case 3961:
case 2252:
case 795:
case 230:
case 1024:
case 3447:
case 1701:
case 699:
case 2169:
case 4086:
case 3037:
case 3487:
case 970:
case 2651:
case 2767:
case 1642:
case 793:
case 2232:
case 1778:
case 3:
case 3954:
case 1756:
case 1516:
case 2088:
case 826:
case 2940:
case 1703:
case 1647:
case 559:
case 3529:
case 3482:
case 1035:
case 4054:
case 3288:
case 3708:
case 1485:
case 3925:
case 2620:
case 371:
case 1784:
case 1394:
case 1999:
case 3592:
case 3771:
case 355:
case 503:
case 2237:
case 309:
case 1266:
case 1744:
case 544:
case 180:
case 3600:
case 875:
case 3248:
case 90:
case 2728:
case 1968:
case 2257:
case 2905:
case 4063:
case 1445:
case 353:
case 2874:
case 3505:
case 2136:
case 3909:
case 3294:
case 423:
case 3304:
case 3121:
case 3832:
case 3123:
case 2546:
case 1835:
case 2103:
case 2586:
case 729:
case 1018:
case 2213:
case 425:
case 1348:
case 2525:
case 1167:
case 2101:
case 389:
case 2929:
case 2324:
case 146:
case 2997:
case 2355:
case 2714:
case 307:
case 2554:
case 676:
case 3011:
case 2184:
case 1239:
case 2848:
case 3013:
case 3165:
case 3343:
case 44:
case 3857:
case 2415:
case 17:
case 2335:
case 2360:
case 1507:
case 2561:
case 557:
case 1128:
case 2534:
case 122:
case 2094:
case 2563:
case 2144:
case 1374:
case 3837:
case 1979:
case 2542:
case 971:
case 55:
case 3174:
case 1181:
case 647:
case 3409:
case 2821:
case 1350:
case 1711:
case 1713:
case 2616:
case 1506:
case 1183:
case 460:
case 1564:
case 2308:
case 2373:
case 953:
case 660:
case 3679:
case 231:
case 2996:
case 447:
case 909:
case 536:
case 1533:
case 1091:
case 219:
case 2570:
case 3801:
case 3538:
case 1871:
case 3610:
case 3367:
case 196:
case 2865:
case 2915:
case 2759:
case 2519:
case 1609:
case 2157:
case 22:
case 3576:
case 3718:
case 788:
case 3990:
case 1479:
case 2739:
case 1104:
case 2850:
case 2695:
case 932:
case 2137:
case 328:
case 370:
case 1214:
case 1520:
case 3844:
case 3046:
case 487:
case 1719:
case 1207:
case 1787:
case 2628:
case 3401:
case 1559:
case 2077:
case 1068:
case 99:
case 2263:
case 2892:
case 1275:
case 152:
case 3403:
case 6:
case 3478:
case 2005:
case 361:
case 1810:
case 3240:
case 2720:
case 2254:
case 3025:
case 1747:
case 1099:
case 4037:
case 2379:
case 2974:
case 432:
case 3673:
case 2421:
case 593:
case 609:
case 2450:
case 1678:
case 3937:
case 133:
case 2753:
case 3444:
case 455:
case 2286:
case 2706:
case 2225:
case 2751:
case 1742:
case 748:
case 2040:
case 653:
case 2988:
case 2072:
case 2733:
case 3205:
case 3957:
case 3785:
case 1112:
case 1636:
case 1770:
case 2430:
case 2465:
case 2948:
case 2080:
case 744:
case 1392:
case 1202:
case 1408:
case 453:
case 409:
case 947:
case 3277:
case 671:
case 705:
case 414:
case 2764:
case 1329:
case 2246:
case 2897:
case 4084:
case 519:
case 3727:
case 2247:
case 531:
case 1455:
case 1045:
case 3956:
case 3192:
case 545:
case 874:
case 1220:
case 3903:
case 315:
case 3042:
case 358:
case 3238:
case 3432:
case 811:
case 3082:
case 354:
case 1460:
case 3624:
case 1657:
case 1761:
case 2921:
case 4044:
case 3936:
case 2109:
case 25:
case 2707:
case 1026:
case 508:
case 1231:
case 2598:
case 1746:
case 3019:
case 4036:
case 1264:
case 2950:
case 923:
case 169:
case 3655:
case 3768:
case 2270:
case 1233:
case 68:
case 1652:
case 52:
case 1908:
case 794:
case 2242:
case 4078:
case 2569:
case 2448:
case 2930:
case 4003:
case 2681:
case 1971:
case 3389:
case 3799:
case 1206:
case 3984:
case 1396:
case 3317:
case 2683:
case 3635:
case 186:
case 1253:
case 2076:
case 634:
case 775:
case 3734:
case 2849:
case 2593:
case 2648:
case 3026:
case 2064:
case 751:
case 2033:
case 154:
case 1082:
case 1624:
case 2390:
case 3763:
case 4008:
case 773:
case 1978:
case 1903:
case 115:
case 2740:
case 2443:
case 3514:
case 2053:
case 1452:
case 401:
case 1276:
case 679:
case 638:
case 2967:
case 2006:
case 3455:
case 1389:
case 1047:
case 1984:
case 3396:
case 1635:
case 2466:
case 3424:
case 3253:
case 1197:
case 3632:
case 3908:
case 2812:
case 2020:
case 3251:
case 1722:
case 726:
case 3725:
case 1457:
case 369:
case 1655:
case 1768:
case 3000:
case 742:
case 2285:
case 3233:
case 3231:
case 96:
case 3746:
case 1019:
case 412:
case 3264:
case 1087:
case 2226:
case 1349:
case 1437:
case 565:
case 2777:
case 1608:
case 502:
case 3747:
case 1086:
case 2665:
case 1673:
case 3149:
case 3684:
case 3022:
case 872:
case 1240:
case 2983:
case 3935:
case 1932:
case 3539:
case 967:
case 3068:
case 3275:
case 352:
case 3644:
case 2738:
case 2895:
case 768:
case 3719:
case 199:
case 3397:
case 3955:
case 3787:
case 940:
case 3117:
case 3559:
case 1952:
case 216:
case 4055:
case 1061:
case 480:
case 2007:
case 2966:
case 520:
case 906:
case 3329:
case 1205:
case 1785:
case 1957:
case 335:
case 1395:
case 843:
case 3112:
case 2462:
case 808:
case 2268:
case 3782:
case 1594:
case 1745:
case 3601:
case 4060:
case 1054:
case 831:
case 680:
case 3879:
case 333:
case 1444:
case 574:
case 3027:
case 2904:
case 2299:
case 2309:
case 980:
case 2794:
case 3533:
case 2585:
case 857:
case 1801:
case 1803:
case 3093:
case 10:
case 3531:
case 2495:
case 1679:
case 3330:
case 1878:
case 1328:
case 3410:
case 2697:
case 3506:
case 3553:
case 756:
case 3181:
case 2545:
case 2336:
case 640:
case 3321:
case 1069:
case 2692:
case 128:
case 1188:
case 1558:
case 1718:
case 2828:
case 883:
case 3808:
case 721:
case 3609:
case 1098:
case 2293:
case 440:
case 1538:
case 2291:
case 2301:
case 2500:
case 1884:
case 2416:
case 1367:
case 396:
case 3167:
case 66:
case 2489:
case 3690:
case 189:
case 3855:
case 3769:
case 1366:
case 3348:
case 1832:
case 2059:
case 3910:
case 2883:
case 3860:
case 2337:
case 46:
case 1505:
case 3502:
case 1294:
case 1121:
case 2449:
case 322:
case 274:
case 938:
case 979:
case 2804:
case 1580:
case 3374:
case 690:
case 1572:
case 1791:
case 37:
case 1793:
case 3507:
case 2696:
case 3128:
case 4010:
case 2332:
case 2173:
case 2527:
case 2412:
case 1343:
case 2218:
case 1857:
case 737:
case 2108:
case 1540:
case 2866:
case 239:
case 220:
case 901:
case 1341:
case 107:
case 3239:
case 211:
case 2171:
case 343:
case 2836:
case 1545:
case 3821:
case 2174:
case 3542:
case 1949:
case 1014:
case 3269:
case 3823:
case 3616:
case 841:
case 1697:
case 2679:
case 2878:
case 91:
case 1495:
case 20:
case 4015:
case 558:
case 319:
case 1155:
case 3570:
case 1917:
case 331:
case 1384:
case 1794:
case 3582:
case 1867:
case 3152:
case 929:
case 224:
case 78:
case 2367:
case 2610:
case 2884:
case 3497:
case 1124:
case 2098:
case 1303:
case 1293:
case 3519:
case 3759:
case 2148:
case 3865:
case 1828:
case 1629:
case 2718:
case 2990:
case 2558:
case 2844:
case 1692:
case 3137:
case 694:
case 3695:
case 1449:
case 3136:
case 3612:
case 2909:
case 7:
case 2505:
case 1881:
case 1337:
case 266:
case 3546:
case 561:
case 891:
case 2577:
case 2832:
case 1059:
case 2123:
case 3213:
case 3178:
case 1599:
case 3992:
case 395:
case 1995:
case 1522:
case 599:
case 2366:
case 3324:
case 1489:
case 289:
case 1841:
case 3211:
case 1171:
case 2341:
case 1352:
case 3355:
case 178:
case 1916:
case 659:
case 4092:
case 2857:
case 3415:
case 1412:
case 2130:
case 2165:
case 3848:
case 1173:
case 709:
case 3649:
case 1527:
case 3534:
case 459:
case 1332:
case 605:
case 3689:
case 771:
case 2490:
case 1696:
case 3617:
case 3888:
case 2793:
case 3335:
case 2381:
case 2572:
case 644:
case 2580:
case 3094:
case 174:
case 249:
case 1889:
case 1967:
case 3247:
case 2276:
case 417:
case 2129:
case 1053:
case 1051:
case 1443:
case 822:
case 50:
case 2192:
case 3923:
case 1390:
case 1483:
case 2082:
case 959:
case 3666:
case 2624:
case 3775:
case 846:
case 2238:
case 1772:
case 1110:
case 3707:
case 3287:
case 1064:
case 4050:
case 213:
case 3219:
case 948:
case 35:
case 1648:
case 903:
case 3474:
case 2936:
case 617:
case 3921:
case 3950:
case 2944:
case 2019:
case 2349:
case 1226:
case 4021:
case 3598:
case 3643:
case 1285:
case 3270:
case 3702:
case 3282:
case 3930:
case 1674:
case 1245:
case 1962:
case 2722:
case 3448:
case 484:
case 3076:
case 2197:
case 3058:
case 3683:
case 1466:
case 79:
case 2799:
case 2984:
case 2317:
case 2952:
case 3261:
case 3077:
case 2401:
case 430:
case 429:
case 589:
case 2478:
case 3005:
case 3263:
case 3892:
case 723:
case 2240:
case 1983:
case 881:
case 566:
case 3421:
case 1758:
case 3379:
case 383:
case 3974:
case 998:
case 2809:
case 1518:
case 3706:
case 3286:
case 1299:
case 1309:
case 3513:
case 4074:
case 3040:
case 3988:
case 1222:
case 3751:
case 3667:
case 357:
case 3225:
case 2054:
case 962:
case 2594:
case 1462:
case 2063:
case 3948:
case 1268:
case 2115:
case 3430:
case 3072:
case 2957:
case 2205:
case 2785:
case 2395:
case 3731:
case 3897:
case 1816:
case 1007:
case 2726:
case 2277:
case 2061:
case 116:
case 2034:
case 1421:
case 2149:
case 1379:
case 3227:
case 2539:
case 2960:
case 1720:
case 2684:
case 350:
case 1423:
case 2022:
case 2810:
case 3895:
case 3650:
case 2275:
case 252:
case 828:
case 1261:
case 1077:
case 2189:
case 1234:
case 1628:
case 926:
case 2207:
case 2787:
case 3816:
case 1897:
case 241:
case 4041:
case 437:
case 3966:
case 1246:
case 973:
case 682:
case 2782:
case 2202:
case 2408:
case 3075:
case 3462:
case 1948:
case 1465:
case 3621:
case 1072:
case 1310:
case 57:
case 1988:
case 3222:
case 1751:
case 4083:
case 1225:
case 1706:
case 1286:
case 80:
case 3309:
case 522:
case 1513:
case 2603:
case 2879:
case 233:
case 992:
case 3031:
case 3593:
case 3648:
case 1474:
case 1109:
case 2657:
case 577:
case 3780:
case 3390:
case 2435:
case 3483:
case 1775:
case 3591:
case 2085:
case 3033:
case 456:
case 807:
case 706:
case 3051:
case 1604:
case 3443:
case 2220:
case 2195:
case 3740:
case 2637:
case 4062:
case 656:
case 2045:
case 43:
case 2315:
case 2754:
case 1896:
case 3817:
case 2455:
case 3889:
case 3006:
case 3967:
case 3441:
case 1076:
case 421:
case 2116:
case 3466:
case 410:
case 1815:
case 1930:
case 1681:
case 1448:
case 968:
case 3812:
case 740:
case 3020:
case 1641:
case 3705:
case 2233:
case 964:
case 889:
case 1702:
case 1950:
case 3777:
case 2746:
case 2264:
case 2231:
case 200:
case 1324:
case 2690:
case 1101:
case 3417:
case 1496:
case 910:
case 3039:
case 127:
case 1156:
case 2018:
case 1213:
case 1586:
case 1178:
case 3843:
case 1992:
case 552:
case 3599:
case 664:
case 3995:
case 3883:
case 2860:
case 2798:
case 2388:
case 3059:
case 668:
case 3568:
case 302:
case 3615:
case 3881:
case 3337:
case 2374:
case 533:
case 1144:
case 1563:
case 1094:
case 2575:
case 1534:
case 3332:
case 1561:
case 2128:
case 956:
case 849:
case 1888:
case 1335:
case 1360:
case 3108:
case 2162:
case 3412:
case 3173:
case 1848:
case 3527:
case 2239:
case 3171:
case 1997:
case 339:
case 1355:
case 378:
case 320:
case 3866:
case 2824:
case 854:
case 3155:
case 1570:
case 2533:
case 3585:
case 2091:
case 3794:
case 1996:
case 3917:
case 131:
case 104:
case 3989:
case 1429:
case 2365:
case 3495:
case 2531:
case 1308:
case 3526:
case 734:
case 2564:
case 2553:
case 738:
case 2410:
case 2506:
case 1616:
case 475:
case 277:
case 2711:
case 1821:
case 2350:
case 982:
case 108:
case 1542:
case 3344:
case 1137:
case 2321:
case 4049:
case 2479:
case 1739:
case 3828:
case 1547:
case 3862:
case 3293:
case 12:
case 2808:
case 1587:
case 1519:
case 3356:
case 1915:
case 296:
case 172:
case 3500:
case 2871:
case 861:
case 281:
case 642:
case 4017:
case 2166:
case 4089:
case 3291:
case 3301:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771016401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,];
var gg_b = "1771016401/";

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
