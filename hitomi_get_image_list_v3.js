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
case 140:
case 1031:
case 1444:
case 926:
case 1517:
case 3813:
case 2313:
case 2995:
case 63:
case 3765:
case 1559:
case 656:
case 58:
case 2259:
case 291:
case 2065:
case 1876:
case 1479:
case 990:
case 139:
case 491:
case 3547:
case 3414:
case 2845:
case 806:
case 2439:
case 3848:
case 2836:
case 3099:
case 1161:
case 3712:
case 1596:
case 1922:
case 776:
case 3209:
case 884:
case 3336:
case 2829:
case 734:
case 3998:
case 1742:
case 899:
case 4071:
case 1990:
case 2006:
case 304:
case 1488:
case 12:
case 1095:
case 3250:
case 436:
case 3424:
case 669:
case 3037:
case 4093:
case 2931:
case 2241:
case 1258:
case 3511:
case 683:
case 2478:
case 600:
case 1541:
case 2558:
case 3452:
case 3650:
case 747:
case 3823:
case 2323:
case 3834:
case 629:
case 2704:
case 2627:
case 3793:
case 1605:
case 101:
case 2819:
case 2416:
case 850:
case 614:
case 1777:
case 1374:
case 3820:
case 1500:
case 1798:
case 3232:
case 3884:
case 3179:
case 2600:
case 2857:
case 2960:
case 3790:
case 3167:
case 3508:
case 1114:
case 1828:
case 3555:
case 1906:
case 4054:
case 1666:
case 3475:
case 2981:
case 3892:
case 2090:
case 675:
case 3632:
case 3087:
case 987:
case 3253:
case 505:
case 1971:
case 2392:
case 821:
case 275:
case 2460:
case 2662:
case 2902:
case 1396:
case 3442:
case 488:
case 475:
case 187:
case 2548:
case 3536:
case 2104:
case 1938:
case 1248:
case 2251:
case 1471:
case 214:
case 754:
case 3983:
case 510:
case 1412:
case 3930:
case 1809:
case 2137:
case 2978:
case 2187:
case 2615:
case 3276:
case 2431:
case 3767:
case 3980:
case 442:
case 3091:
case 901:
case 1317:
case 1714:
case 1169:
case 3924:
case 2864:
case 400:
case 229:
case 96:
case 3243:
case 4044:
case 65:
case 1198:
case 586:
case 1359:
case 1177:
case 333:
case 3586:
case 469:
case 2215:
case 4067:
case 3545:
case 2079:
case 692:
case 2463:
case 1213:
case 483:
case 3643:
case 3952:
case 3347:
case 4079:
case 1089:
case 283:
case 370:
case 3601:
case 1292:
case 1016:
case 830:
case 862:
case 2855:
case 1620:
case 1574:
case 1853:
case 1300:
case 3557:
case 2520:
case 1002:
case 1730:
case 2773:
case 2249:
case 2939:
case 3628:
case 822:
case 3866:
case 1490:
case 1832:
case 1220:
case 2156:
case 4038:
case 780:
case 1454:
case 3228:
case 3046:
case 2592:
case 2225:
case 3070:
case 1207:
case 3171:
case 3372:
case 735:
case 1234:
case 3311:
case 939:
case 1761:
case 1078:
case 38:
case 553:
case 2199:
case 2305:
case 878:
case 2358:
case 1341:
case 43:
case 1780:
case 3914:
case 902:
case 1724:
case 2507:
case 940:
case 708:
case 1979:
case 3805:
case 3858:
case 126:
case 241:
case 663:
case 4033:
case 3078:
case 390:
case 1372:
case 2024:
case 2181:
case 689:
case 3882:
case 3207:
case 1171:
case 3223:
case 2382:
case 4024:
case 3493:
case 1035:
case 672:
case 807:
case 1112:
case 4080:
case 3142:
case 4052:
case 1858:
case 2841:
case 1788:
case 623:
case 3634:
case 2803:
case 2350:
case 2827:
case 3303:
case 1914:
case 3850:
case 2052:
case 3724:
case 3327:
case 2160:
case 2778:
case 3341:
case 1519:
case 3775:
case 1628:
case 2353:
case 3730:
case 3300:
case 927:
case 3620:
case 3422:
case 3684:
case 1557:
case 1738:
case 2163:
case 3016:
case 2619:
case 1085:
case 2716:
case 1046:
case 2257:
case 1498:
case 4075:
case 1477:
case 2083:
case 2487:
case 3832:
case 3284:
case 2702:
case 967:
case 2131:
case 412:
case 657:
case 2219:
case 295:
case 3549:
case 4083:
case 2935:
case 1201:
case 2286:
case 2817:
case 1243:
case 3317:
case 1091:
case 1364:
case 3613:
case 819:
case 52:
case 2859:
case 1961:
case 2686:
case 3089:
case 1321:
case 1643:
case 1347:
case 904:
case 3213:
case 986:
case 56:
case 671:
case 1676:
case 2726:
case 1536:
case 138:
case 1218:
case 2468:
case 3551:
case 864:
case 1442:
case 437:
case 751:
case 3210:
case 2229:
case 237:
case 3039:
case 824:
case 2739:
case 3809:
case 1193:
case 3610:
case 2518:
case 2236:
case 2946:
case 2195:
case 2985:
case 3026:
case 2309:
case 2629:
case 3769:
case 587:
case 1319:
case 1555:
case 3114:
case 1167:
case 2189:
case 720:
case 879:
case 3500:
case 1884:
case 1179:
case 1232:
case 1754:
case 905:
case 1357:
case 3798:
case 2328:
case 2655:
case 3971:
case 2849:
case 3438:
case 2446:
case 732:
case 760:
case 2098:
case 611:
case 1483:
case 796:
case 938:
case 1632:
case 110:
case 1430:
case 1253:
case 2208:
case 637:
case 1144:
case 2255:
case 2069:
case 843:
case 1892:
case 3666:
case 2956:
case 848:
case 1294:
case 3205:
case 186:
case 1424:
case 933:
case 1037:
case 1682:
case 1480:
case 2672:
case 970:
case 104:
case 32:
case 3965:
case 3325:
case 301:
case 1694:
case 1282:
case 1834:
case 2795:
case 1823:
case 1650:
case 1452:
case 2139:
case 1807:
case 2272:
case 3541:
case 2594:
case 1771:
case 1336:
case 3351:
case 1068:
case 3840:
case 2042:
case 3362:
case 612:
case 74:
case 1712:
case 731:
case 3922:
case 1099:
case 3152:
case 717:
case 268:
case 2851:
case 3990:
case 1969:
case 127:
case 428:
case 2197:
case 1188:
case 1977:
case 1810:
case 2318:
case 2509:
case 3993:
case 302:
case 590:
case 3183:
case 223:
case 294:
case 2664:
case 1138:
case 98:
case 3517:
case 2247:
case 3444:
case 423:
case 494:
case 2815:
case 3:
case 2102:
case 263:
case 2731:
case 526:
case 3843:
case 472:
case 3467:
case 289:
case 2343:
case 2116:
case 463:
case 3063:
case 339:
case 1386:
case 153:
case 644:
case 272:
case 1345:
case 3876:
case 489:
case 2814:
case 2128:
case 3486:
case 3174:
case 3759:
case 1379:
case 29:
case 3445:
case 122:
case 2958:
case 1941:
case 1663:
case 1764:
case 49:
case 452:
case 1344:
case 3149:
case 162:
case 1721:
case 130:
case 2531:
case 999:
case 4017:
case 2265:
case 2059:
case 1263:
case 477:
case 3796:
case 3268:
case 178:
case 1681:
case 1571:
case 3009:
case 277:
case 3429:
case 1506:
case 2410:
case 3299:
case 2206:
case 3955:
case 307:
case 3908:
case 1281:
case 3668:
case 2339:
case 2271:
case 890:
case 1900:
case 2434:
case 2003:
case 737:
case 3352:
case 3237:
case 451:
case 2027:
case 2041:
case 1711:
case 4003:
case 3162:
case 660:
case 10:
case 4027:
case 696:
case 3050:
case 2423:
case 4041:
case 3204:
case 2407:
case 3151:
case 2118:
case 3637:
case 609:
case 2880:
case 1388:
case 121:
case 246:
case 1959:
case 3897:
case 582:
case 3878:
case 2794:
case 1835:
case 3324:
case 579:
case 3727:
case 3604:
case 2654:
case 3330:
case 859:
case 2753:
case 1885:
case 3569:
case 1590:
case 1846:
case 1338:
case 2875:
case 3115:
case 1873:
case 3032:
case 2830:
case 3700:
case 1522:
case 3457:
case 2732:
case 1145:
case 525:
case 319:
case 3816:
case 3419:
case 548:
case 2302:
case 3053:
case 2622:
case 3287:
case 3762:
case 2992:
case 1736:
case 365:
case 3751:
case 3881:
case 1371:
case 2182:
case 1949:
case 1172:
case 801:
case 2381:
case 3040:
case 2842:
case 2984:
case 2360:
case 3141:
case 4051:
case 82:
case 4062:
case 3103:
case 1729:
case 3127:
case 3919:
case 1868:
case 2539:
case 348:
case 1048:
case 2062:
case 3043:
case 2363:
case 2907:
case 209:
case 343:
case 3100:
case 1689:
case 3715:
case 1579:
case 2589:
case 2679:
case 220:
case 3421:
case 524:
case 593:
case 2934:
case 2244:
case 1155:
case 3447:
case 1108:
case 1417:
case 4015:
case 460:
case 1544:
case 3464:
case 90:
case 382:
case 232:
case 2015:
case 1745:
case 2279:
case 2132:
case 260:
case 1786:
case 651:
case 296:
case 3831:
case 2644:
case 2877:
case 3369:
case 1390:
case 3646:
case 3575:
case 1719:
case 2728:
case 2869:
case 1092:
case 1354:
case 3673:
case 4049:
case 3583:
case 794:
case 723:
case 3377:
case 1602:
case 113:
case 2516:
case 507:
case 2238:
case 3028:
case 3285:
case 840:
case 3749:
case 4074:
case 3455:
case 677:
case 789:
case 985:
case 1121:
case 3273:
case 1034:
case 757:
case 44:
case 1427:
case 381:
case 2458:
case 2405:
case 417:
case 3196:
case 2288:
case 199:
case 962:
case 2395:
case 2109:
case 106:
case 69:
case 184:
case 2597:
case 2578:
case 3524:
case 1804:
case 2652:
case 2450:
case 1270:
case 3007:
case 318:
case 1196:
case 1945:
case 827:
case 2901:
case 276:
case 2976:
case 2494:
case 3441:
case 3297:
case 181:
case 1552:
case 3034:
case 2280:
case 549:
case 3427:
case 3804:
case 1895:
case 434:
case 1472:
case 2734:
case 1411:
case 858:
case 1635:
case 2893:
case 562:
case 306:
case 234:
case 3588:
case 1725:
case 603:
case 3678:
case 3393:
case 2304:
case 2570:
case 2680:
case 3837:
case 2630:
case 2432:
case 3887:
case 907:
case 2546:
case 2675:
case 3092:
case 608:
case 2918:
case 578:
case 1929:
case 1117:
case 3719:
case 1646:
case 1530:
case 3202:
case 2683:
case 2720:
case 2822:
case 3020:
case 3121:
case 2940:
case 3084:
case 2019:
case 3616:
case 1749:
case 2275:
case 3147:
case 1455:
case 1936:
case 1246:
case 3322:
case 616:
case 313:
case 3602:
case 4086:
case 1421:
case 2865:
case 143:
case 67:
case 3365:
case 561:
case 2045:
case 3579:
case 2713:
case 1043:
case 964:
case 179:
case 3013:
case 3745:
case 1831:
case 3459:
case 3856:
case 3786:
case 350:
case 182:
case 2356:
case 1464:
case 3417:
case 924:
case 993:
case 3172:
case 255:
case 2029:
case 3306:
case 697:
case 3626:
case 1881:
case 1751:
case 2748:
case 3736:
case 1018:
case 3371:
case 455:
case 3312:
case 1762:
case 447:
case 75:
case 3496:
case 1957:
case 1342:
case 3899:
case 774:
case 3226:
case 2368:
case 3048:
case 2036:
case 3729:
case 41:
case 1919:
case 1127:
case 2710:
case 2399:
case 4036:
case 1598:
case 925:
case 1687:
case 742:
case 1577:
case 1700:
case 2385:
case 2113:
case 2669:
case 3846:
case 3590:
case 3449:
case 2838:
case 1569:
case 833:
case 1330:
case 2698:
case 1053:
case 783:
case 965:
case 2269:
case 655:
case 297:
case 2055:
case 2766:
case 198:
case 2428:
case 3522:
case 2277:
case 1802:
case 3145:
case 497:
case 3996:
case 1457:
case 1050:
case 982:
case 3295:
case 193:
case 3425:
case 805:
case 3711:
case 979:
case 1094:
case 1237:
case 1352:
case 788:
case 1604:
case 3695:
case 3870:
case 1380:
case 1964:
case 3129:
case 3917:
case 943:
case 2888:
case 2758:
case 254:
case 4072:
case 27:
case 1878:
case 3593:
case 2335:
case 1082:
case 1637:
case 1299:
case 416:
case 235:
case 1826:
case 378:
case 3571:
case 756:
case 2242:
case 2932:
case 3512:
case 1796:
case 3660:
case 3462:
case 3900:
case 741:
case 1839:
case 2568:
case 2107:
case 208:
case 107:
case 1955:
case 2134:
case 1668:
case 2440:
case 2953:
case 408:
case 3119:
case 3367:
case 3764:
case 1717:
case 2120:
case 1256:
case 3231:
case 2476:
case 1889:
case 1174:
case 634:
case 1486:
case 203:
case 3565:
case 4047:
case 2401:
case 2443:
case 4021:
case 349:
case 2867:
case 3891:
case 981:
case 2192:
case 4064:
case 280:
case 676:
case 373:
case 1656:
case 330:
case 362:
case 506:
case 2556:
case 3747:
case 3344:
case 2064:
case 480:
case 2391:
case 1972:
case 1149:
case 55:
case 1686:
case 686:
case 3791:
case 2347:
case 369:
case 3067:
case 470:
case 3463:
case 1543:
case 604:
case 1286:
case 4091:
case 2154:
case 897:
case 2201:
case 1970:
case 2933:
case 2243:
case 329:
case 1817:
case 3864:
case 2190:
case 2091:
case 2364:
case 2980:
case 3431:
case 3997:
case 1789:
case 536:
case 205:
case 2618:
case 2975:
case 3262:
case 721:
case 2983:
case 1309:
case 1629:
case 3251:
case 3104:
case 1946:
case 3916:
case 2218:
case 1726:
case 111:
case 2442:
case 70:
case 3902:
case 1499:
case 1540:
case 3662:
case 375:
case 854:
case 2788:
case 2858:
case 1841:
case 3735:
case 33:
case 1827:
case 3770:
case 3168:
case 48:
case 2914:
case 1052:
case 994:
case 923:
case 1061:
case 3358:
case 1797:
case 1394:
case 28:
case 1778:
case 1080:
case 2106:
case 2372:
case 2171:
case 1382:
case 1033:
case 3495:
case 2035:
case 653:
case 144:
case 989:
case 3592:
case 3038:
case 1716:
case 2046:
case 3926:
case 2228:
case 3274:
case 957:
case 968:
case 2498:
case 1257:
case 1332:
case 3156:
case 1702:
case 4046:
case 4085:
case 195:
case 2469:
case 2866:
case 627:
case 1657:
case 928:
case 3520:
case 2557:
case 3855:
case 1163:
case 3746:
case 2609:
case 2329:
case 145:
case 2969:
case 876:
case 1987:
case 3310:
case 1197:
case 3135:
case 3296:
case 3012:
case 2188:
case 2977:
case 3071:
case 3170:
case 1318:
case 128:
case 2336:
case 718:
case 2068:
case 3348:
case 799:
case 2209:
case 1042:
case 995:
case 458:
case 4068:
case 1862:
case 2099:
case 1340:
case 467:
case 3836:
case 168:
case 1781:
case 3439:
case 1851:
case 2848:
case 834:
case 2706:
case 157:
case 1376:
case 2521:
case 541:
case 163:
case 53:
case 3756:
case 3489:
case 1731:
case 2414:
case 189:
case 944:
case 453:
case 3065:
case 2345:
case 391:
case 2765:
case 1763:
case 2138:
case 3313:
case 3146:
case 2813:
case 1937:
case 1247:
case 2564:
case 3659:
case 1849:
case 638:
case 3566:
case 4087:
case 1485:
case 410:
case 1532:
case 514:
case 2632:
case 750:
case 3090:
case 2475:
case 3981:
case 911:
case 1255:
case 2508:
case 605:
case 3384:
case 3960:
case 3600:
case 1189:
case 1874:
case 3320:
case 1553:
case 2754:
case 2653:
case 1328:
case 588:
case 1608:
case 575:
case 855:
case 2694:
case 374:
case 35:
case 583:
case 3963:
case 3627:
case 3603:
case 2834:
case 3323:
case 3334:
case 2452:
case 2823:
case 3558:
case 2461:
case 1211:
case 3505:
case 1594:
case 2294:
case 1956:
case 542:
case 3931:
case 3497:
case 2037:
case 3203:
case 2682:
case 315:
case 2572:
case 2424:
case 3227:
case 404:
case 2250:
case 1126:
case 4037:
case 3093:
case 171:
case 3594:
case 1505:
case 3825:
case 2541:
case 401:
case 2503:
case 1334:
case 1737:
case 1307:
case 1704:
case 900:
case 3795:
case 748:
case 2605:
case 2325:
case 201:
case 2658:
case 15:
case 22:
case 192:
case 136:
case 969:
case 2488:
case 983:
case 765:
case 3672:
case 1227:
case 115:
case 1497:
case 2258:
case 1981:
case 2906:
case 3255:
case 809:
case 3473:
case 3098:
case 988:
case 1054:
case 1566:
case 1392:
case 687:
case 779:
case 2971:
case 3328:
case 1819:
case 537:
case 2266:
case 2798:
case 1022:
case 2777:
case 2374:
case 743:
case 1787:
case 1384:
case 1960:
case 3553:
case 1320:
case 1600:
case 914:
case 860:
case 2828:
case 2114:
case 2876:
case 3621:
case 1065:
case 2479:
case 191:
case 3647:
case 239:
case 3343:
case 956:
case 2467:
case 389:
case 3376:
case 690:
case 439:
case 1886:
case 363:
case 1756:
case 240:
case 1173:
case 3937:
case 941:
case 4031:
case 3763:
case 4:
case 440:
case 3664:
case 2183:
case 2559:
case 323:
case 626:
case 2993:
case 2315:
case 1426:
case 328:
case 817:
case 1310:
case 3987:
case 512:
case 1006:
case 2990:
case 2818:
case 368:
case 1836:
case 357:
case 2152:
case 2161:
case 781:
case 1696:
case 2060:
case 2596:
case 2840:
case 3042:
case 2490:
case 2692:
case 3702:
case 1156:
case 3487:
case 1274:
case 1038:
case 1592:
case 545:
case 2292:
case 4002:
case 2684:
case 2853:
case 2620:
case 2730:
case 1584:
case 1773:
case 3353:
case 1674:
case 3800:
case 4016:
case 1939:
case 3394:
case 1305:
case 1989:
case 1625:
case 3061:
case 1199:
case 426:
case 707:
case 2850:
case 3052:
case 2967:
case 2303:
case 1168:
case 1507:
case 3827:
case 3350:
case 3803:
case 141:
case 877:
case 1735:
case 2979:
case 156:
case 344:
case 639:
case 2223:
case 466:
case 2207:
case 1872:
case 2234:
case 3181:
case 2078:
case 594:
case 2097:
case 3985:
case 2026:
case 3309:
case 2471:
case 1104:
case 3195:
case 1251:
case 2938:
case 2610:
case 4026:
case 3973:
case 2809:
case 846:
case 2039:
case 3636:
case 337:
case 3229:
case 1902:
case 487:
case 1662:
case 3540:
case 3499:
case 2396:
case 1548:
case 1821:
case 2465:
case 1215:
case 3501:
case 915:
case 1847:
case 259:
case 3543:
case 936:
case 1067:
case 169:
case 3645:
case 459:
case 183:
case 3686:
case 1997:
case 1431:
case 3456:
case 66:
case 571:
case 1615:
case 1187:
case 95:
case 1044:
case 974:
case 2317:
case 1513:
case 3970:
case 1864:
case 2988:
case 142:
case 2515:
case 3743:
case 3644:
case 279:
case 2831:
case 3279:
case 360:
case 3132:
case 332:
case 3015:
case 1356:
case 479:
case 546:
case 282:
case 1214:
case 2447:
case 4001:
case 3244:
case 2863:
case 443:
case 551:
case 2076:
case 2421:
case 1865:
case 3679:
case 320:
case 3153:
case 4043:
case 1045:
case 2715:
case 243:
case 2100:
case 4076:
case 3667:
case 309:
case 1614:
case 3907:
case 3363:
case 425:
case 11:
case 2860:
case 3051:
case 1368:
case 248:
case 3718:
case 3150:
case 4040:
case 225:
case 3539:
case 2103:
case 3920:
case 3194:
case 448:
case 2141:
case 1710:
case 1812:
case 3740:
case 4018:
case 465:
case 1029:
case 1871:
case 3182:
case 1409:
case 3526:
case 698:
case 3992:
case 997:
case 2580:
case 1734:
case 903:
case 1252:
case 1633:
case 2472:
case 3597:
case 552:
case 3688:
case 857:
case 1680:
case 1482:
case 1723:
case 2533:
case 3395:
case 1707:
case 1624:
case 1570:
case 2270:
case 1233:
case 481:
case 1450:
case 1652:
case 845:
case 828:
case 3405:
case 59:
case 2561:
case 281:
case 3458:
case 980:
case 2552:
case 317:
case 1280:
case 2273:
case 4028:
case 1453:
case 2408:
case 916:
case 2455:
case 1019:
case 894:
case 1275:
case 2285:
case 739:
case 3516:
case 1057:
case 1283:
case 2159:
case 1432:
case 702:
case 2673:
case 1546:
case 3466:
case 1918:
case 577:
case 3869:
case 863:
case 1890:
case 3049:
case 2929:
case 2685:
case 872:
case 2117:
case 1683:
case 3877:
case 3910:
case 2530:
case 1573:
case 1784:
case 1854:
case 726:
case 2125:
case 407:
case 2542:
case 1107:
case 2839:
case 2436:
case 108:
case 3271:
case 1123:
case 3709:
case 3339:
case 207:
case 1599:
case 3560:
case 1440:
case 3410:
case 2299:
case 4009:
case 377:
case 3581:
case 3966:
case 2796:
case 116:
case 1982:
case 1844:
case 2656:
case 180:
case 352:
case 3531:
case 0:
case 1556:
case 681:
case 976:
case 1047:
case 934:
case 2717:
case 2314:
case 3665:
case 1879:
case 3389:
case 3905:
case 54:
case 39:
case 2445:
case 2759:
case 103:
case 1867:
case 1950:
case 3814:
case 3176:
case 2053:
case 3622:
case 3420:
case 3302:
case 1008:
case 197:
case 1055:
case 3290:
case 2419:
case 2816:
case 1428:
case 3316:
case 298:
case 665:
case 3143:
case 3732:
case 2457:
case 1298:
case 955:
case 2802:
case 2383:
case 2577:
case 3830:
case 2687:
case 1113:
case 3492:
case 1385:
case 625:
case 91:
case 2569:
case 1838:
case 4032:
case 3753:
case 3883:
case 1373:
case 1587:
case 2703:
case 2604:
case 811:
case 1072:
case 1110:
case 4082:
case 596:
case 3693:
case 3397:
case 560:
case 837:
case 2878:
case 2897:
case 154:
case 3750:
case 2082:
case 2637:
case 1504:
case 4094:
case 787:
case 2050:
case 3852:
case 3782:
case 3423:
case 679:
case 520:
case 293:
case 224:
case 4050:
case 2921:
case 682:
case 3140:
case 493:
case 3027:
case 2237:
case 2947:
case 3434:
case 1750:
case 1824:
case 1118:
case 3370:
case 920:
case 2593:
case 3335:
case 37:
case 2388:
case 875:
case 354:
case 146:
case 2835:
case 1378:
case 3888:
case 2129:
case 2870:
case 3072:
case 421:
case 960:
case 1003:
case 1434:
case 1041:
case 2711:
case 650:
case 151:
case 20:
case 2295:
case 461:
case 4005:
case 1407:
case 1423:
case 1852:
case 2145:
case 1254:
case 2522:
case 2474:
case 800:
case 1143:
case 1316:
case 3766:
case 397:
case 1290:
case 1176:
case 770:
case 1302:
case 1420:
case 1883:
case 3373:
case 1654:
case 3698:
case 2449:
case 3838:
case 2755:
case 3669:
case 883:
case 3346:
case 3113:
case 555:
case 2873:
case 869:
case 473:
case 94:
case 3391:
case 1017:
case 931:
case 2747:
case 3064:
case 1531:
case 230:
case 1059:
case 917:
case 1265:
case 152:
case 2415:
case 618:
case 430:
case 1128:
case 1814:
case 1563:
case 3443:
case 222:
case 303:
case 606:
case 3021:
case 3476:
case 2941:
case 3994:
case 2903:
case 2927:
case 3642:
case 3440:
case 2281:
case 1339:
case 3134:
case 1206:
case 308:
case 1448:
case 2451:
case 3568:
case 2900:
case 2660:
case 2462:
case 1096:
case 613:
case 316:
case 1326:
case 278:
case 285:
case 2681:
case 2506:
case 177:
case 335:
case 841:
case 1581:
case 1612:
case 2400:
case 213:
case 753:
case 3283:
case 3792:
case 1238:
case 1948:
case 508:
case 3275:
case 3019:
case 3230:
case 2084:
case 2121:
case 1502:
case 2020:
case 4092:
case 1877:
case 2202:
case 3720:
case 3854:
case 3784:
case 516:
case 3387:
case 3573:
case 2390:
case 1638:
case 2538:
case 1869:
case 2216:
case 1466:
case 3546:
case 3675:
case 3585:
case 1728:
case 2757:
case 2887:
case 3723:
case 3680:
case 3570:
case 3624:
case 1395:
case 1913:
case 484:
case 2393:
case 2915:
case 3535:
case 2678:
case 2697:
case 206:
case 3893:
case 1578:
case 1688:
case 580:
case 284:
case 1597:
case 3261:
case 3252:
case 3734:
case 727:
case 99:
case 3280:
case 2441:
case 2297:
case 418:
case 4007:
case 3494:
case 2278:
case 662:
case 499:
case 3976:
case 4023:
case 3661:
case 1025:
case 1288:
case 3233:
case 3943:
case 3450:
case 767:
case 299:
case 2023:
case 1920:
case 3105:
case 1984:
case 3399:
case 1842:
case 3710:
case 1539:
case 2868:
case 892:
case 2729:
case 3036:
case 3368:
case 2639:
case 3928:
case 1150:
case 2226:
case 1062:
case 2496:
case 31:
case 1526:
case 2371:
case 3409:
case 3806:
case 4010:
case 2736:
case 1992:
case 3871:
case 2949:
case 3812:
case 786:
case 2111:
case 3591:
case 951:
case 3214:
case 2544:
case 2289:
case 57:
case 661:
case 4013:
case 554:
case 1776:
case 710:
case 2856:
case 1015:
case 160:
case 1132:
case 60:
case 2745:
case 1743:
case 1644:
case 450:
case 3614:
case 109:
case 1363:
case 2365:
case 2925:
case 3865:
case 1589:
case 2155:
case 1934:
case 1244:
case 2108:
case 2567:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759946401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,];
var gg_b = "1759946401/";

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
