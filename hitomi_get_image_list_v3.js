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
var o = 0;
switch (g) {
case 1941:
case 2087:
case 416:
case 194:
case 214:
case 2937:
case 518:
case 1522:
case 2235:
case 1078:
case 578:
case 1471:
case 3283:
case 3460:
case 774:
case 1848:
case 889:
case 1247:
case 1272:
case 152:
case 2918:
case 3095:
case 1950:
case 1279:
case 3068:
case 3188:
case 309:
case 2724:
case 2539:
case 2449:
case 3991:
case 3400:
case 2250:
case 2508:
case 1816:
case 184:
case 2694:
case 3651:
case 3584:
case 1382:
case 249:
case 988:
case 588:
case 2859:
case 3761:
case 1831:
case 137:
case 2234:
case 781:
case 3650:
case 939:
case 1885:
case 283:
case 1280:
case 2594:
case 2647:
case 2611:
case 2081:
case 669:
case 1481:
case 1410:
case 3467:
case 1284:
case 1929:
case 2282:
case 76:
case 1779:
case 3097:
case 277:
case 2041:
case 865:
case 3799:
case 1282:
case 1196:
case 898:
case 3482:
case 3856:
case 3197:
case 4042:
case 1245:
case 2753:
case 4078:
case 3287:
case 3682:
case 3470:
case 3987:
case 3448:
case 1151:
case 2917:
case 280:
case 3327:
case 2799:
case 3189:
case 3844:
case 1958:
case 519:
case 297:
case 2354:
case 3909:
case 2721:
case 2643:
case 3352:
case 1539:
case 1892:
case 3076:
case 3639:
case 963:
case 2005:
case 3210:
case 2086:
case 3637:
case 1812:
case 2253:
case 998:
case 3392:
case 4012:
case 3841:
case 1815:
case 268:
case 3163:
case 2944:
case 3032:
case 87:
case 1653:
case 1851:
case 2069:
case 554:
case 3349:
case 3178:
case 946:
case 2583:
case 1782:
case 1702:
case 3521:
case 705:
case 1170:
case 2644:
case 2016:
case 3899:
case 1765:
case 3471:
case 3066:
case 3063:
case 1490:
case 3036:
case 1646:
case 2639:
case 1200:
case 2851:
case 1309:
case 2978:
case 1062:
case 1588:
case 735:
case 3177:
case 3992:
case 3376:
case 3744:
case 4045:
case 2630:
case 2960:
case 2500:
case 2971:
case 947:
case 445:
case 2963:
case 3312:
case 923:
case 3441:
case 2280:
case 471:
case 776:
case 3771:
case 1012:
case 2268:
case 3583:
case 1244:
case 657:
case 2165:
case 570:
case 934:
case 3561:
case 2913:
case 3885:
case 1447:
case 1210:
case 1501:
case 3779:
case 1994:
case 3789:
case 1043:
case 2416:
case 3001:
case 59:
case 3121:
case 1042:
case 3556:
case 2619:
case 2768:
case 1594:
case 1553:
case 278:
case 3223:
case 1422:
case 3859:
case 1804:
case 1543:
case 221:
case 2262:
case 2565:
case 2022:
case 3891:
case 3250:
case 1729:
case 1086:
case 2107:
case 1091:
case 2857:
case 3350:
case 3035:
case 3088:
case 1861:
case 744:
case 3421:
case 3157:
case 527:
case 2934:
case 357:
case 323:
case 4071:
case 916:
case 999:
case 1183:
case 3073:
case 2024:
case 2745:
case 676:
case 4056:
case 2438:
case 3396:
case 1312:
case 2033:
case 211:
case 1374:
case 2193:
case 945:
case 1813:
case 693:
case 950:
case 1708:
case 2827:
case 2083:
case 2232:
case 3383:
case 1694:
case 3144:
case 3643:
case 1088:
case 3809:
case 1166:
case 2142:
case 2648:
case 645:
case 2493:
case 51:
case 1636:
case 3153:
case 2421:
case 1141:
case 3525:
case 121:
case 1535:
case 1459:
case 2114:
case 1339:
case 3819:
case 3103:
case 85:
case 2576:
case 991:
case 922:
case 1221:
case 2879:
case 3094:
case 3529:
case 1402:
case 3581:
case 720:
case 1456:
case 800:
case 620:
case 307:
case 2120:
case 1714:
case 3788:
case 2468:
case 3102:
case 638:
case 3059:
case 258:
case 3203:
case 82:
case 1856:
case 1474:
case 970:
case 1932:
case 1437:
case 3465:
case 857:
case 1562:
case 289:
case 3213:
case 3002:
case 2995:
case 4007:
case 2715:
case 3796:
case 3310:
case 2516:
case 1438:
case 4054:
case 2688:
case 3776:
case 848:
case 1266:
case 3332:
case 1044:
case 1401:
case 2186:
case 3696:
case 3237:
case 707:
case 2664:
case 652:
case 4:
case 2689:
case 3238:
case 3156:
case 118:
case 3469:
case 3299:
case 2503:
case 2817:
case 2796:
case 2215:
case 2711:
case 2713:
case 751:
case 1050:
case 1194:
case 1479:
case 989:
case 2275:
case 1007:
case 1419:
case 1570:
case 1806:
case 2156:
case 3746:
case 481:
case 3594:
case 605:
case 1949:
case 3126:
case 1324:
case 1189:
case 2991:
case 3741:
case 3698:
case 1258:
case 1000:
case 1690:
case 3903:
case 3754:
case 1614:
case 3085:
case 793:
case 411:
case 2249:
case 157:
case 4065:
case 3281:
case 3449:
case 537:
case 2469:
case 1158:
case 854:
case 4081:
case 1102:
case 1850:
case 3976:
case 4014:
case 1363:
case 538:
case 2248:
case 3531:
case 2731:
case 227:
case 163:
case 26:
case 1863:
case 1556:
case 2189:
case 3951:
case 928:
case 2584:
case 2522:
case 2173:
case 2870:
case 1081:
case 2200:
case 1632:
case 3673:
case 2304:
case 193:
case 1351:
case 3797:
case 2439:
case 1865:
case 399:
case 326:
case 1751:
case 2902:
case 2139:
case 729:
case 3484:
case 1551:
case 161:
case 1139:
case 1128:
case 926:
case 1909:
case 784:
case 1558:
case 1660:
case 3785:
case 3476:
case 3078:
case 3051:
case 3601:
case 2347:
case 3677:
case 3401:
case 100:
case 2265:
case 2371:
case 730:
case 2923:
case 3740:
case 450:
case 1710:
case 3812:
case 2017:
case 2570:
case 474:
case 2754:
case 2785:
case 1497:
case 2441:
case 3869:
case 3175:
case 4050:
case 2000:
case 2833:
case 3783:
case 1990:
case 698:
case 3407:
case 2670:
case 1118:
case 2369:
case 1688:
case 2452:
case 1385:
case 446:
case 1443:
case 782:
case 599:
case 3867:
case 804:
case 3926:
case 936:
case 496:
case 1326:
case 3725:
case 2376:
case 361:
case 874:
case 1089:
case 1202:
case 3098:
case 2537:
case 748:
case 4029:
case 583:
case 3694:
case 151:
case 3224:
case 3373:
case 2842:
case 978:
case 410:
case 1860:
case 2226:
case 1451:
case 1898:
case 4033:
case 257:
case 2938:
case 2609:
case 1083:
case 2104:
case 1617:
case 695:
case 2875:
case 3912:
case 1142:
case 1488:
case 3762:
case 3160:
case 2881:
case 977:
case 2941:
case 3552:
case 3314:
case 2956:
case 691:
case 557:
case 2426:
case 1578:
case 1259:
case 3075:
case 1182:
case 4009:
case 3025:
case 3989:
case 1270:
case 579:
case 308:
case 1130:
case 2876:
case 3358:
case 223:
case 1395:
case 778:
case 1049:
case 3127:
case 1739:
case 2657:
case 1972:
case 2400:
case 2623:
case 3571:
case 2597:
case 2809:
case 881:
case 1953:
case 2704:
case 3089:
case 1373:
case 1896:
case 965:
case 1234:
case 2914:
case 213:
case 3760:
case 2411:
case 3733:
case 871:
case 208:
case 4036:
case 3523:
case 2540:
case 3884:
case 1133:
case 2792:
case 2942:
case 2029:
case 3982:
case 3534:
case 1155:
case 2695:
case 2980:
case 847:
case 3974:
case 1059:
case 206:
case 3319:
case 1849:
case 1355:
case 3800:
case 907:
case 3670:
case 2228:
case 3598:
case 1528:
case 3179:
case 1601:
case 1494:
case 2387:
case 814:
case 2276:
case 111:
case 2479:
case 454:
case 1862:
case 1599:
case 142:
case 2364:
case 1545:
case 3142:
case 77:
case 3703:
case 1847:
case 3304:
case 1529:
case 1615:
case 2019:
case 2979:
case 1307:
case 2889:
case 3087:
case 2880:
case 3714:
case 3161:
case 3300:
case 3890:
case 3369:
case 3303:
case 807:
case 1331:
case 2625:
case 2221:
case 3620:
case 808:
case 3852:
case 1017:
case 3139:
case 3410:
case 771:
case 2496:
case 3105:
case 3225:
case 3014:
case 3617:
case 2767:
case 894:
case 2110:
case 761:
case 2259:
case 3111:
case 2258:
case 3813:
case 4064:
case 1013:
case 3318:
case 327:
case 2959:
case 2501:
case 128:
case 1199:
case 2175:
case 1820:
case 3351:
case 3882:
case 110:
case 3269:
case 1506:
case 1340:
case 3872:
case 3539:
case 3433:
case 2008:
case 2515:
case 3824:
case 1317:
case 3241:
case 3124:
case 827:
case 2897:
case 4037:
case 840:
case 3041:
case 1807:
case 2256:
case 1678:
case 1655:
case 1207:
case 456:
case 646:
case 478:
case 448:
case 1115:
case 2510:
case 2908:
case 1201:
case 696:
case 1181:
case 3219:
case 1641:
case 754:
case 315:
case 84:
case 167:
case 437:
case 3944:
case 2574:
case 3574:
case 1068:
case 2783:
case 2950:
case 3353:
case 3499:
case 3503:
case 462:
case 281:
case 1008:
case 1706:
case 3171:
case 1058:
case 1184:
case 1649:
case 218:
case 3414:
case 125:
case 2804:
case 1362:
case 398:
case 421:
case 1752:
case 3738:
case 263:
case 1325:
case 6:
case 2230:
case 1241:
case 424:
case 1532:
case 3516:
case 3271:
case 933:
case 2788:
case 2823:
case 3348:
case 2924:
case 2548:
case 3555:
case 3305:
case 3540:
case 1549:
case 487:
case 2417:
case 1004:
case 72:
case 2244:
case 969:
case 3368:
case 1874:
case 3715:
case 3999:
case 1242:
case 3610:
case 4046:
case 2263:
case 1693:
case 1032:
case 476:
case 1889:
case 3507:
case 2419:
case 521:
case 1565:
case 1534:
case 1099:
case 68:
case 3861:
case 2401:
case 4027:
case 1286:
case 1945:
case 1753:
case 890:
case 2462:
case 472:
case 2006:
case 849:
case 3320:
case 2363:
case 3251:
case 3941:
case 2517:
case 133:
case 1413:
case 501:
case 3235:
case 743:
case 2283:
case 3895:
case 1228:
case 2202:
case 2682:
case 3816:
case 2386:
case 1188:
case 28:
case 162:
case 1743:
case 247:
case 2063:
case 702:
case 915:
case 1232:
case 2117:
case 1206:
case 420:
case 2793:
case 3436:
case 604:
case 2339:
case 1033:
case 252:
case 413:
case 3727:
case 3621:
case 2257:
case 3517:
case 3450:
case 435:
case 811:
case 4062:
case 3442:
case 2674:
case 1938:
case 1930:
case 2977:
case 1524:
case 3975:
case 2840:
case 3495:
case 3772:
case 3512:
case 2004:
case 1590:
case 2476:
case 2744:
case 1802:
case 3943:
case 3839:
case 951:
case 3679:
case 2123:
case 304:
case 1274:
case 2027:
case 938:
case 2208:
case 107:
case 1453:
case 301:
case 2222:
case 3807:
case 3337:
case 555:
case 3478:
case 2163:
case 45:
case 3042:
case 2443:
case 230:
case 3593:
case 1214:
case 2886:
case 1881:
case 215:
case 2733:
case 1303:
case 3275:
case 3184:
case 973:
case 2408:
case 3371:
case 2957:
case 1527:
case 1391:
case 2618:
case 2126:
case 94:
case 4030:
case 4002:
case 225:
case 1608:
case 2520:
case 504:
case 491:
case 712:
case 2599:
case 3205:
case 1839:
case 1117:
case 74:
case 3994:
case 2355:
case 3481:
case 2834:
case 2447:
case 2320:
case 3757:
case 1803:
case 3742:
case 4055:
case 366:
case 3233:
case 986:
case 2294:
case 1332:
case 4052:
case 334:
case 3632:
case 769:
case 3277:
case 2864:
case 2281:
case 3946:
case 2538:
case 3578:
case 3497:
case 1747:
case 372:
case 964:
case 3451:
case 4079:
case 3218:
case 1961:
case 1866:
case 3873:
case 2905:
case 1991:
case 643:
case 2284:
case 3615:
case 2135:
case 2440:
case 852:
case 1784:
case 1409:
case 3362:
case 2325:
case 2132:
case 896:
case 147:
case 2681:
case 561:
case 842:
case 1858:
case 3317:
case 3949:
case 539:
case 1598:
case 1321:
case 404:
case 220:
case 2487:
case 1308:
case 1597:
case 1965:
case 3518:
case 3260:
case 3676:
case 64:
case 675:
case 3367:
case 2015:
case 2241:
case 2615:
case 130:
case 2952:
case 1388:
case 2446:
case 3532:
case 3435:
case 4001:
case 941:
case 3033:
case 2528:
case 3784:
case 17:
case 1684:
case 1346:
case 262:
case 3947:
case 2413:
case 2100:
case 711:
case 531:
case 1299:
case 2301:
case 3293:
case 2966:
case 449:
case 2600:
case 1430:
case 3298:
case 2049:
case 1372:
case 0:
case 1119:
case 2895:
case 415:
case 2982:
case 12:
case 962:
case 1845:
case 576:
case 582:
case 844:
case 1888:
case 972:
case 204:
case 820:
case 931:
case 112:
case 3815:
case 172:
case 2896:
case 1801:
case 2425:
case 2007:
case 3635:
case 2272:
case 3286:
case 1110:
case 1318:
case 1027:
case 502:
case 244:
case 3389:
case 1595:
case 3683:
case 3611:
case 3345:
case 724:
case 2337:
case 1907:
case 789:
case 1072:
case 139:
case 2542:
case 2134:
case 819:
case 1530:
case 979:
case 245:
case 903:
case 1063:
case 3201:
case 2129:
case 1316:
case 3692:
case 1329:
case 3587:
case 2816:
case 4010:
case 2668:
case 2491:
case 3267:
case 143:
case 1512:
case 2909:
case 2760:
case 2430:
case 1964:
case 1785:
case 885:
case 2044:
case 2812:
case 2055:
case 250:
case 2529:
case 1979:
case 1378:
case 2143:
case 851:
case 1122:
case 573:
case 3264:
case 2274:
case 2741:
case 2499:
case 83:
case 732:
case 1975:
case 370:
case 3950:
case 441:
case 2204:
case 3625:
case 1664:
case 3060:
case 239:
case 1396:
case 3402:
case 878:
case 1125:
case 3295:
case 2085:
case 1022:
case 4028:
case 1630:
case 1370:
case 1090:
case 2219:
case 1924:
case 2945:
case 164:
case 2467:
case 3831:
case 670:
case 3113:
case 3918:
case 2781:
case 3:
case 1250:
case 2865:
case 3938:
case 3386:
case 3050:
case 649:
case 2037:
case 1294:
case 3674:
case 2306:
case 243:
case 124:
case 2093:
case 1366:
case 2683:
case 2894:
case 2155:
case 3430:
case 2813:
case 2612:
case 3422:
case 2254:
case 627:
case 883:
case 3363:
case 581:
case 3388:
case 3302:
case 3573:
case 600:
case 2375:
case 3391:
case 1798:
case 3013:
case 148:
case 1846:
case 1271:
case 11:
case 3022:
case 3297:
case 2307:
case 4067:
case 3505:
case 3270:
case 3827:
case 3216:
case 591:
case 66:
case 1855:
case 1028:
case 2185:
case 1894:
case 944:
case 917:
case 429:
case 90:
case 886:
case 3564:
case 3693:
case 1254:
case 2707:
case 2967:
case 2838:
case 1134:
case 1897:
case 3403:
case 238:
case 1482:
case 359:
case 3764:
case 195:
case 2255:
case 2045:
case 1586:
case 2665:
case 3966:
case 1213:
case 140:
case 1573:
case 1313:
case 668:
case 3626:
case 2637:
case 2854:
case 584:
case 1190:
case 2154:
case 1467:
case 2051:
case 1943:
case 2158:
case 3490:
case 2179:
case 2391:
case 3502:
case 838:
case 1917:
case 1454:
case 2621:
case 846:
case 1477:
case 4073:
case 1622:
case 395:
case 2099:
case 3942:
case 1679:
case 2794:
case 2820:
case 2010:
case 1968:
case 1464:
case 38:
case 295:
case 680:
case 758:
case 3697:
case 2821:
case 3510:
case 3344:
case 856:
case 2296:
case 132:
case 997:
case 4069:
case 2533:
case 3405:
case 3452:
case 3462:
case 1311:
case 569:
case 3795:
case 3011:
case 2264:
case 3537:
case 1513:
case 3496:
case 1167:
case 1936:
case 2342:
case 3231:
case 145:
case 127:
case 2267:
case 1236:
case 640:
case 1376:
case 265:
case 2547:
case 292:
case 3712:
case 3618:
case 3955:
case 69:
case 2197:
case 507:
case 2097:
case 2951:
case 1105:
case 4044:
case 882:
case 3549:
case 1434:
case 1159:
case 3091:
case 1150:
case 2171:
case 887:
case 457:
case 3463:
case 1338:
case 155:
case 3646:
case 2153:
case 2769:
case 3917:
case 2653:
case 2878:
case 1500:
case 522:
case 3053:
case 2790:
case 3567:
case 2532:
case 3395:
case 799:
case 700:
case 633:
case 1748:
case 4000:
case 30:
case 2040:
case 2458:
case 2381:
case 3334:
case 2502:
case 3187:
case 3527:
case 775:
case 3937:
case 1458:
case 10:
case 115:
case 3010:
case 1140:
case 3498:
case 407:
case 688:
case 3008:
case 2504:
case 2169:
case 1249:
case 2118:
case 2911:
case 1098:
case 2053:
case 3340:
case 1899:
case 2678:
case 1557:
case 2269:
case 511:
case 3431:
case 2590:
case 1674:
case 46:
case 2863:
case 2961:
case 2586:
case 3687:
case 71:
case 3914:
case 3705:
case 1120:
case 3419:
case 3842:
case 1576:
case 2740:
case 3553:
case 3940:
case 2399:
case 3826:
case 995:
case 1116:
case 902:
case 3247:
case 806:
case 659:
case 671:
case 3423:
case 3282:
case 1475:
case 3911:
case 92:
case 2976:
case 1306:
case 3234:
case 2692:
case 2997:
case 949:
case 2018:
case 3341:
case 1457:
case 3798:
case 2260:
case 1811:
case 2514:
case 2046:
case 228:
case 325:
case 3658:
case 13:
case 3418:
case 2638:
case 2872:
case 3980:
case 2636:
case 2949:
case 3608:
case 568:
case 687:
case 1833:
case 3718:
case 494:
case 1082:
case 2738:
case 149:
case 2579:
case 685:
case 2776:
case 1450:
case 2962:
case 2629:
case 767:
case 637:
case 2111:
case 354:
case 2231:
case 1910:
case 3200:
case 1903:
case 1724:
case 3652:
case 288:
case 692:
case 541:
case 740:
case 1336:
case 3616:
case 3923:
case 905:
case 2429:
case 831:
case 1416:
case 1937:
case 741:
case 3504:
case 3717:
case 2922:
case 108:
case 2798:
case 3860:
case 1720:
case 1552:
case 672:
case 331:
case 1310:
case 1387:
case 533:
case 2042:
case 3183:
case 3364:
case 1398:
case 3921:
case 1:
case 1503:
case 3226:
case 294:
case 4051:
case 1857:
case 1717:
case 1023:
case 3889:
case 971:
case 1163:
case 834:
case 1359:
case 475:
case 23:
case 136:
case 2084:
case 131:
case 1216:
case 1821:
case 617:
case 1787:
case 1040:
case 3321:
case 344:
case 3845:
case 2641:
case 1647:
case 1465:
case 353:
case 1767:
case 3242:
case 1009:
case 1763:
case 3792:
case 4017:
case 1135:
case 3655:
case 1805:
case 1542:
case 641:
case 1829:
case 1176:
case 1504:
case 2990:
case 3393:
case 291:
case 3668:
case 549:
case 3356:
case 3004:
case 3752:
case 589:
case 3834:
case 2974:
case 1293:
case 594:
case 1996:
case 3135:
case 2498:
case 1034:
case 4085:
case 3488:
case 1433:
case 14:
case 189:
case 3288:
case 1164:
case 3945:
case 2316:
case 1473:
case 1841:
case 2437:
case 1431:
case 1644:
case 1350:
case 2965:
case 3466:
case 2958:
case 2211:
case 3290:
case 2628:
case 2150:
case 1919:
case 267:
case 1878:
case 3572:
case 392:
case 3614:
case 2764:
case 3755:
case 3438:
case 1976:
case 1667:
case 4063:
case 104:
case 737:
case 1121:
case 3343:
case 3080:
case 625:
case 3058:
case 3653:
case 2065:
case 1292:
case 3526:
case 1220:
case 254:
case 2591:
case 3686:
case 3681:
case 381:
case 2489:
case 2861:
case 3190:
case 1208:
case 3765:
case 1544:
case 2109:
case 3881:
case 556:
case 3907:
case 3763:
case 317:
case 4092:
case 3170:
case 419:
case 596:
case 2465:
case 1761:
case 1260:
case 2309:
case 1408:
case 1521:
case 1186:
case 70:
case 2927:
case 3840:
case 2278:
case 2900:
case 2002:
case 2271:
case 1107:
case 190:
case 2554:
case 1933:
case 260:
case 2061:
case 4021:
case 845:
case 114:
case 1076:
case 2078:
case 1725:
case 2839:
case 794:
case 1659:
case 2523:
case 2862:
case 1223:
case 956:
case 1486:
case 543:
case 1579:
case 968:
case 1734:
case 1029:
case 401:
case 2071:
case 1746:
case 3768:
case 719:
case 160:
case 2709:
case 3612:
case 80:
case 324:
case 134:
case 3902:
case 2758:
case 3636:
case 3437:
case 1389:
case 97:
case 3003:
case 2718:
case 1327:
case 2168:
case 1257:
case 904:
case 960:
case 1927:
case 3880:
case 374:
case 3263:
case 363:
case 3609:
case 418:
case 3119:
case 2397:
case 3278:
case 2312:
case 2352:
case 2082:
case 2705:
case 1575:
case 3313:
case 1583:
case 3249:
case 4040:
case 102:
case 621:
case 2149:
case 2333:
case 2507:
case 1132:
case 545:
case 3519:
case 1353:
case 2181:
case 755:
case 1449:
case 1520:
case 3939:
case 897:
case 2710:
case 1496:
case 335:
case 3659:
case 2608:
case 1669:
case 4082:
case 2883:
case 3325:
case 766:
case 932:
case 2587:
case 2525:
case 2138:
case 453:
case 1791:
case 1161:
case 1423:
case 4094:
case 1834:
case 2811:
case 390:
case 2157:
case 572:
case 4070:
case 3083:
case 3927:
case 2680:
case 1852:
case 3602:
case 918:
case 558:
case 2700:
case 1982:
case 158:
case 1689:
case 356:
case 44:
case 3037:
case 497:
case 619:
case 1061:
case 1911:
case 2212:
case 1365:
case 1010:
case 276:
case 2011:
case 2789:
case 2486:
case 1314:
case 9:
case 2133:
case 234:
case 1912:
case 2763:
case 1060:
case 966:
case 1394:
case 469:
case 2684:
case 2480:
case 2014:
case 3803:
case 1905:
case 990:
case 1137:
case 655:
case 2837:
case 1255:
case 1627:
case 746:
case 587:
case 1531:
case 3671:
case 1995:
case 2910:
case 1515:
case 3863:
case 1493:
case 3057:
case 3675:
case 447:
case 2434:
case 2122:
case 1560:
case 259:
case 3791:
case 3983:
case 103:
case 1031:
case 396:
case 2898:
case 1343:
case 3577:
case 73:
case 679:
case 826:
case 3074:
case 2190:
case 3108:
case 2686:
case 423:
case 1104:
case 2605:
case 2367:
case 891:
case 3773:
case 3998:
case 2302:
case 2935:
case 1947:
case 4061:
case 984:
case 503:
case 320:
case 2973:
case 2802:
case 408:
case 4005:
case 1758:
case 622:
case 1136:
case 1987:
case 1005:
case 3480:
case 377:
case 1384:
case 2201:
case 2650:
case 1328:
case 3582:
case 1913:
case 1525:
case 3628:
case 2601:
case 440:
case 1837:
case 1639:
case 202:
case 1407:
case 3866:
case 2698:
case 3457:
case 2147:
case 1124:
case 3294:
case 1526:
case 3486:
case 900:
case 2989:
case 1880:
case 3029:
case 1297:
case 3874:
case 1106:
case 1129:
case 948:
case 749:
case 1569:
case 1425:
case 1567:
case 3454:
case 725:
case 2752:
case 3479:
case 3853:
case 3024:
case 3828:
case 1989:
case 1538:
case 2009:
case 1568:
case 2743:
case 608:
case 3445:
case 1686:
case 1705:
case 275:
case 983:
case 3355:
case 2350:
case 1361:
case 159:
case 2360:
case 2737:
case 1967:
case 2431:
case 715:
case 2034:
case 425:
case 3833:
case 1721:
case 1077:
case 2931:
case 3169:
case 1344:
case 3871:
case 2620:
case 1444:
case 1168:
case 1658:
case 1101:
case 1541:
case 119:
case 2845:
case 1360:
case 3292:
case 2314:
case 1687:
case 2716:
case 872:
case 3952:
case 3838:
case 952:
case 371:
case 4068:
case 19:
case 3759:
case 1656:
case 499:
case 3707:
case 120:
case 1435:
case 2622:
case 153:
case 1171:
case 2652:
case 1519:
case 1335:
case 287:
case 1052:
case 677:
case 1916:
case 731:
case 1683:
case 460:
case 1826:
case 1238:
case 2632:
case 3501:
case 689:
case 2073:
case 1836:
case 1215:
case 2028:
case 2836:
case 3875:
case 3663:
case 734:
case 1476:
case 3619:
case 2735:
case 574:
case 575:
case 3990:
case 222:
case 2216:
case 1680:
case 1944:
case 2818:
case 660:
case 3174:
case 1561:
case 2059:
case 880:
case 1832:
case 823:
case 2251:
case 2568:
case 1156:
case 2068:
case 2403:
case 2983:
case 174:
case 3627:
case 967:
case 4058:
case 3329:
case 919:
case 2588:
case 1152:
case 3986:
case 1864:
case 3823:
case 1840:
case 1962:
case 302:
case 2742:
case 3193:
case 3335:
case 430:
case 1322:
case 3015:
case 2633:
case 350:
case 1906:
case 2667:
case 813:
case 1235:
case 2365:
case 2569:
case 1375:
case 3979:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1678622401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,];
var gg_b = "1678622401/";

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
