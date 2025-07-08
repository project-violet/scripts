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
case 2093:
case 4091:
case 213:
case 3641:
case 2780:
case 2199:
case 3349:
case 3837:
case 1848:
case 2025:
case 1113:
case 2610:
case 3745:
case 1177:
case 3661:
case 2443:
case 2032:
case 1450:
case 2187:
case 3956:
case 840:
case 2037:
case 116:
case 990:
case 1042:
case 2421:
case 107:
case 3516:
case 2101:
case 1492:
case 3791:
case 2838:
case 1728:
case 241:
case 3151:
case 1062:
case 3832:
case 3312:
case 3054:
case 2542:
case 65:
case 2004:
case 2706:
case 1232:
case 970:
case 934:
case 128:
case 1293:
case 2267:
case 3991:
case 3324:
case 1928:
case 936:
case 1225:
case 2366:
case 2854:
case 2567:
case 2959:
case 3804:
case 3248:
case 683:
case 4056:
case 1532:
case 552:
case 62:
case 2519:
case 3674:
case 829:
case 762:
case 605:
case 2034:
case 2736:
case 1258:
case 973:
case 632:
case 1955:
case 551:
case 26:
case 1044:
case 521:
case 1174:
case 2229:
case 1207:
case 1502:
case 3834:
case 1064:
case 1766:
case 2571:
case 399:
case 1494:
case 1215:
case 1281:
case 3939:
case 667:
case 1946:
case 3440:
case 1234:
case 811:
case 3335:
case 1161:
case 3881:
case 3052:
case 3460:
case 2485:
case 3526:
case 1966:
case 2411:
case 379:
case 210:
case 3783:
case 2564:
case 3090:
case 2264:
case 446:
case 519:
case 1651:
case 2015:
case 2081:
case 4083:
case 2131:
case 364:
case 2808:
case 3057:
case 2244:
case 993:
case 2620:
case 1755:
case 1123:
case 366:
case 74:
case 1195:
case 2007:
case 843:
case 547:
case 2040:
case 1341:
case 1673:
case 2170:
case 230:
case 1649:
case 486:
case 2408:
case 3:
case 3085:
case 82:
case 276:
case 723:
case 1787:
case 831:
case 883:
case 302:
case 3720:
case 2777:
case 3840:
case 753:
case 4020:
case 1782:
case 472:
case 85:
case 3481:
case 1030:
case 1799:
case 2811:
case 2885:
case 2331:
case 269:
case 2639:
case 1180:
case 3407:
case 1612:
case 1159:
case 1260:
case 37:
case 640:
case 1999:
case 1240:
case 2530:
case 1901:
case 706:
case 2230:
case 294:
case 1540:
case 749:
case 3114:
case 3978:
case 717:
case 296:
case 51:
case 1987:
case 1426:
case 3636:
case 40:
case 425:
case 2500:
case 2454:
case 2166:
case 916:
case 3550:
case 907:
case 2146:
case 3396:
case 643:
case 2076:
case 3910:
case 2923:
case 1784:
case 3292:
case 491:
case 2995:
case 611:
case 2298:
case 3250:
case 1614:
case 3876:
case 3289:
case 3233:
case 880:
case 2723:
case 3493:
case 3063:
case 471:
case 3425:
case 3388:
case 1833:
case 2795:
case 3105:
case 1313:
case 2438:
case 2821:
case 563:
case 1731:
case 1622:
case 3079:
case 3117:
case 2399:
case 3173:
case 3043:
case 3437:
case 629:
case 1000:
case 2741:
case 1897:
case 2118:
case 805:
case 134:
case 2609:
case 170:
case 750:
case 2645:
case 3710:
case 2843:
case 2387:
case 2761:
case 832:
case 1576:
case 3943:
case 2531:
case 1616:
case 325:
case 3874:
case 733:
case 3963:
case 1523:
case 781:
case 83:
case 1084:
case 1134:
case 1595:
case 1998:
case 391:
case 1223:
case 2776:
case 3921:
case 1561:
case 3394:
case 1900:
case 3126:
case 2231:
case 1541:
case 945:
case 1360:
case 1574:
case 371:
case 2061:
case 4063:
case 997:
case 2976:
case 1158:
case 3632:
case 3693:
case 2171:
case 1700:
case 100:
case 368:
case 819:
case 3823:
case 1668:
case 2810:
case 3743:
case 1181:
case 2445:
case 3763:
case 401:
case 1107:
case 3375:
case 1648:
case 3637:
case 2095:
case 1427:
case 1274:
case 1986:
case 2023:
case 511:
case 1753:
case 1405:
case 2820:
case 118:
case 1730:
case 1099:
case 2878:
case 1193:
case 1449:
case 3296:
case 3602:
case 1082:
case 2652:
case 3397:
case 2119:
case 540:
case 4085:
case 384:
case 2657:
case 3392:
case 2142:
case 49:
case 3020:
case 249:
case 206:
case 3785:
case 1412:
case 3148:
case 3596:
case 3877:
case 2740:
case 204:
case 3813:
case 3333:
case 3168:
case 3634:
case 1104:
case 852:
case 3911:
case 3288:
case 1572:
case 3985:
case 1213:
case 1277:
case 2501:
case 660:
case 3551:
case 1953:
case 253:
case 1930:
case 1626:
case 2201:
case 3436:
case 2386:
case 1272:
case 2287:
case 769:
case 1496:
case 3217:
case 1971:
case 3512:
case 2518:
case 742:
case 3269:
case 3205:
case 710:
case 3908:
case 2255:
case 2902:
case 1824:
case 918:
case 2036:
case 2186:
case 2981:
case 619:
case 24:
case 499:
case 3517:
case 675:
case 4008:
case 2685:
case 2611:
case 2319:
case 3197:
case 3660:
case 2707:
case 2839:
case 4052:
case 924:
case 3757:
case 2246:
case 1393:
case 3640:
case 2781:
case 2367:
case 2715:
case 505:
case 3224:
case 4090:
case 479:
case 1488:
case 2266:
case 3413:
case 415:
case 695:
case 464:
case 3133:
case 237:
case 2420:
case 1869:
case 309:
case 3189:
case 3790:
case 3039:
case 1018:
case 3472:
case 2566:
case 2100:
case 863:
case 567:
case 3150:
case 2362:
case 76:
case 346:
case 2478:
case 1873:
case 2546:
case 466:
case 1849:
case 344:
case 2758:
case 4057:
case 1762:
case 2679:
case 1070:
case 2371:
case 1358:
case 757:
case 3441:
case 1302:
case 4038:
case 2663:
case 3880:
case 1697:
case 145:
case 2865:
case 3954:
case 2737:
case 2809:
case 1692:
case 2329:
case 2621:
case 531:
case 1206:
case 887:
case 3175:
case 488:
case 2891:
case 3738:
case 1719:
case 860:
case 2059:
case 3214:
case 2153:
case 1650:
case 2725:
case 3103:
case 1315:
case 1767:
case 1381:
case 3065:
case 3009:
case 2130:
case 1334:
case 708:
case 3235:
case 1919:
case 713:
case 3938:
case 1580:
case 2925:
case 2228:
case 2270:
case 985:
case 3527:
case 3222:
case 2856:
case 1962:
case 2528:
case 3194:
case 3535:
case 2006:
case 741:
case 900:
case 3056:
case 1555:
case 2824:
case 1907:
case 601:
case 3866:
case 1734:
case 3239:
case 1981:
case 1915:
case 3283:
case 3539:
case 2764:
case 2066:
case 906:
case 917:
case 1902:
case 648:
case 2176:
case 1255:
case 2304:
case 2744:
case 1100:
case 3926:
case 137:
case 3630:
case 1420:
case 2805:
case 1478:
case 3855:
case 3012:
case 3487:
case 1362:
case 3653:
case 2337:
case 2849:
case 2873:
case 1546:
case 2451:
case 311:
case 2236:
case 3401:
case 923:
case 1758:
case 3121:
case 3338:
case 1883:
case 1319:
case 3818:
case 1839:
case 3069:
case 1611:
case 2536:
case 571:
case 866:
case 2812:
case 1246:
case 343:
case 162:
case 3049:
case 3179:
case 1781:
case 1367:
case 463:
case 2393:
case 1715:
case 568:
case 2325:
case 2488:
case 1266:
case 1621:
case 3431:
case 2692:
case 3828:
case 1329:
case 920:
case 2307:
case 3870:
case 2719:
case 1725:
case 2689:
case 4068:
case 2633:
case 439:
case 178:
case 1080:
case 3600:
case 1793:
case 2835:
case 3916:
case 2028:
case 2140:
case 1643:
case 1371:
case 277:
case 312:
case 584:
case 2302:
case 3556:
case 2358:
case 1904:
case 888:
case 728:
case 3111:
case 245:
case 1809:
case 487:
case 3185:
case 3035:
case 2506:
case 2160:
case 2697:
case 3352:
case 1663:
case 1570:
case 2259:
case 3591:
case 3968:
case 1528:
case 716:
case 2942:
case 1344:
case 1704:
case 41:
case 707:
case 714:
case 50:
case 3545:
case 2947:
case 592:
case 3509:
case 3565:
case 1228:
case 4016:
case 1856:
case 1270:
case 1993:
case 2998:
case 1776:
case 43:
case 2561:
case 736:
case 664:
case 2541:
case 1456:
case 2241:
case 120:
case 961:
case 1531:
case 1654:
case 978:
case 2134:
case 2786:
case 699:
case 1330:
case 2668:
case 4089:
case 419:
case 1810:
case 2031:
case 1445:
case 509:
case 2648:
case 848:
case 2427:
case 1095:
case 380:
case 1584:
case 544:
case 2107:
case 998:
case 1129:
case 3642:
case 1023:
case 2274:
case 285:
case 3619:
case 3152:
case 1638:
case 3428:
case 3385:
case 2798:
case 3311:
case 2422:
case 1976:
case 2158:
case 1491:
case 200:
case 2340:
case 2700:
case 2435:
case 3750:
case 32:
case 3994:
case 149:
case 1142:
case 1657:
case 1483:
case 2087:
case 2412:
case 1162:
case 8:
case 1740:
case 2469:
case 1820:
case 2405:
case 3703:
case 3343:
case 1167:
case 1690:
case 3887:
case 3379:
case 1878:
case 2851:
case 2449:
case 2417:
case 89:
case 3775:
case 1013:
case 1077:
case 35:
case 3363:
case 1147:
case 3138:
case 1652:
case 3664:
case 2896:
case 2930:
case 2272:
case 3220:
case 1386:
case 3278:
case 3975:
case 1582:
case 3096:
case 1282:
case 2277:
case 3520:
case 1960:
case 3154:
case 2572:
case 18:
case 1299:
case 1713:
case 3075:
case 3788:
case 1777:
case 483:
case 588:
case 2782:
case 2323:
case 3003:
case 2799:
case 169:
case 3109:
case 1331:
case 2159:
case 2053:
case 130:
case 2617:
case 2875:
case 174:
case 1040:
case 1170:
case 3191:
case 2673:
case 756:
case 1128:
case 1452:
case 1408:
case 2803:
case 2787:
case 3310:
case 176:
case 754:
case 3471:
case 1490:
case 3444:
case 1230:
case 2987:
case 3464:
case 3156:
case 2106:
case 2560:
case 2374:
case 942:
case 3796:
case 910:
case 3585:
case 1913:
case 3285:
case 80:
case 3988:
case 718:
case 322:
case 3646:
case 2624:
case 293:
case 1553:
case 1530:
case 2136:
case 908:
case 3221:
case 2086:
case 1923:
case 1298:
case 321:
case 785:
case 2614:
case 646:
case 2931:
case 855:
case 3886:
case 1454:
case 3279:
case 1146:
case 3521:
case 3263:
case 941:
case 564:
case 2627:
case 3089:
case 234:
case 270:
case 2897:
case 2000:
case 3183:
case 1118:
case 3442:
case 2468:
case 347:
case 1974:
case 3092:
case 566:
case 871:
case 1387:
case 3462:
case 1879:
case 957:
case 2098:
case 3467:
case 432:
case 927:
case 2984:
case 2276:
case 1795:
case 2889:
case 2377:
case 1586:
case 3097:
case 1438:
case 2892:
case 3628:
case 579:
case 133:
case 2622:
case 1399:
case 1037:
case 3048:
case 3178:
case 216:
case 2450:
case 2504:
case 3735:
case 3867:
case 3554:
case 3400:
case 2172:
case 2042:
case 3120:
case 1318:
case 2770:
case 3383:
case 1838:
case 3068:
case 214:
case 4027:
case 2728:
case 4022:
case 108:
case 2848:
case 1093:
case 2067:
case 535:
case 1025:
case 265:
case 2047:
case 4035:
case 2113:
case 3254:
case 2204:
case 1032:
case 1182:
case 412:
case 1980:
case 258:
case 1262:
case 1567:
case 2532:
case 1519:
case 933:
case 672:
case 1542:
case 777:
case 57:
case 1219:
case 3935:
case 1004:
case 3684:
case 1346:
case 1267:
case 745:
case 3922:
case 157:
case 3714:
case 3508:
case 2044:
case 3552:
case 2207:
case 2064:
case 1571:
case 3026:
case 429:
case 459:
case 3844:
case 3917:
case 3949:
case 4024:
case 2696:
case 2258:
case 2955:
case 3864:
case 1184:
case 1736:
case 969:
case 3969:
case 1264:
case 2475:
case 2359:
case 1131:
case 1808:
case 655:
case 3717:
case 1852:
case 3601:
case 1244:
case 501:
case 2755:
case 1936:
case 1007:
case 3453:
case 3345:
case 2534:
case 443:
case 994:
case 1002:
case 3682:
case 2688:
case 1544:
case 548:
case 1485:
case 809:
case 1411:
case 996:
case 1564:
case 3924:
case 2718:
case 4073:
case 4049:
case 834:
case 538:
case 481:
case 2693:
case 433:
case 1190:
case 1789:
case 268:
case 2632:
case 2721:
case 2010:
case 1831:
case 3061:
case 1428:
case 271:
case 1619:
case 1152:
case 3023:
case 3465:
case 1157:
case 1642:
case 2480:
case 3129:
case 2763:
case 180:
case 2637:
case 1662:
case 3810:
case 2779:
case 167:
case 2303:
case 2861:
case 4076:
case 1997:
case 1210:
case 3531:
case 2874:
case 748:
case 2979:
case 320:
case 2943:
case 3164:
case 1950:
case 940:
case 255:
case 1989:
case 2921:
case 3144:
case 3776:
case 3074:
case 38:
case 702:
case 2116:
case 2985:
case 2911:
case 3282:
case 1578:
case 292:
case 3587:
case 3287:
case 1220:
case 3386:
case 2588:
case 943:
case 2436:
case 3201:
case 614:
case 3599:
case 597:
case 79:
case 2397:
case 3147:
case 3077:
case 476:
case 3608:
case 545:
case 929:
case 474:
case 286:
case 1343:
case 628:
case 2872:
case 3820:
case 2615:
case 3300:
case 2168:
case 317:
case 469:
case 2333:
case 304:
case 2389:
case 2350:
case 1882:
case 2148:
case 2785:
case 2711:
case 2078:
case 959:
case 3760:
case 131:
case 3072:
case 1629:
case 3483:
case 272:
case 3439:
case 3142:
case 349:
case 1321:
case 2413:
case 3715:
case 2640:
case 690:
case 1017:
case 3934:
case 2757:
case 1499:
case 3246:
case 4058:
case 1069:
case 3685:
case 3707:
case 3347:
case 1163:
case 1121:
case 3342:
case 111:
case 2708:
case 799:
case 2150:
case 1653:
case 3478:
case 209:
case 3420:
case 2368:
case 1630:
case 1926:
case 3100:
case 4081:
case 2472:
case 4015:
case 2790:
case 715:
case 2952:
case 2908:
case 2205:
case 2269:
case 2316:
case 1583:
case 931:
case 1539:
case 983:
case 92:
case 1024:
case 2990:
case 2573:
case 2549:
case 2517:
case 3915:
case 1239:
case 670:
case 3218:
case 129:
case 766:
case 2957:
case 3036:
case 2505:
case 3186:
case 1866:
case 46:
case 764:
case 636:
case 2527:
case 3993:
case 1291:
case 858:
case 3270:
case 1484:
case 2222:
case 3228:
case 980:
case 1565:
case 556:
case 1545:
case 3932:
case 3006:
case 3704:
case 3344:
case 526:
case 788:
case 1968:
case 2474:
case 2522:
case 1014:
case 2227:
case 3570:
case 3364:
case 1591:
case 2880:
case 3663:
case 3809:
case 2954:
case 3865:
case 816:
case 4032:
case 140:
case 1556:
case 112:
case 1768:
case 3679:
case 408:
case 1390:
case 413:
case 3643:
case 3371:
case 4093:
case 2461:
case 503:
case 3410:
case 1600:
case 2103:
case 3130:
case 2423:
case 2065:
case 1027:
case 3059:
case 3725:
case 3153:
case 1698:
case 4037:
case 2045:
case 1870:
case 2738:
case 361:
case 3329:
case 1828:
case 3621:
case 2568:
case 897:
case 3366:
case 3562:
case 1922:
case 498:
case 2991:
case 2324:
case 3267:
case 2196:
case 3706:
case 975:
case 3242:
case 4006:
case 2804:
case 3567:
case 1486:
case 327:
case 3443:
case 3182:
case 3355:
case 3479:
case 187:
case 2305:
case 1254:
case 2369:
case 2661:
case 2038:
case 921:
case 1727:
case 3025:
case 1842:
case 2373:
case 2641:
case 93:
case 3093:
case 2709:
case 2765:
case 3199:
case 2349:
case 2151:
case 2312:
case 2832:
case 573:
case 4059:
case 2516:
case 478:
case 1631:
case 1068:
case 951:
case 1383:
case 2791:
case 624:
case 3101:
case 1339:
case 2623:
case 1120:
case 845:
case 1400:
case 1867:
case 288:
case 3037:
case 279:
case 2322:
case 342:
case 2807:
case 2090:
case 1924:
case 1391:
case 3564:
case 3370:
case 3328:
case 3857:
case 2460:
case 1829:
case 215:
case 2526:
case 1712:
case 2815:
case 3544:
case 2881:
case 2613:
case 2008:
case 489:
case 3002:
case 462:
case 2440:
case 1705:
case 1345:
case 266:
case 1453:
case 3890:
case 3007:
case 3936:
case 2057:
case 3620:
case 3244:
case 3081:
case 3015:
case 1773:
case 3808:
case 1717:
case 1365:
case 264:
case 3131:
case 1309:
case 2858:
case 838:
case 3264:
case 570:
case 2802:
case 1969:
case 1208:
case 3736:
case 3184:
case 1864:
case 1290:
case 3271:
case 1973:
case 1949:
case 590:
case 299:
case 2939:
case 2983:
case 1026:
case 2314:
case 3571:
case 744:
case 4036:
case 685:
case 1508:
case 3553:
case 2434:
case 27:
case 1211:
case 786:
case 1988:
case 1285:
case 1511:
case 2636:
case 1585:
case 1796:
case 1094:
case 2920:
case 152:
case 2978:
case 2114:
case 2203:
case 558:
case 1444:
case 1471:
case 2720:
case 4013:
case 2011:
case 1830:
case 376:
case 2594:
case 4077:
case 3060:
case 2:
case 3452:
case 2402:
case 1191:
case 374:
case 2458:
case 330:
case 382:
case 803:
case 818:
case 2127:
case 3331:
case 1109:
case 417:
case 369:
case 1165:
case 3811:
case 404:
case 2860:
case 1003:
case 3683:
case 1429:
case 697:
case 3457:
case 2294:
case 516:
case 2840:
case 1788:
case 3713:
case 2432:
case 2149:
case 2079:
case 4041:
case 2043:
case 1670:
case 91:
case 333:
case 3691:
case 1628:
case 1447:
case 3821:
case 1097:
case 1800:
case 2169:
case 885:
case 2388:
case 3723:
case 2493:
case 3879:
case 2710:
case 3645:
case 1378:
case 3761:
case 3843:
case 755:
case 1092:
case 3974:
case 4023:
case 147:
case 791:
case 1442:
case 1183:
case 1033:
case 1089:
case 3609:
case 175:
case 2437:
case 2112:
case 2351:
case 2592:
case 768:
case 3598:
case 939:
case 3774:
case 3146:
case 151:
case 771:
case 2550:
case 420:
case 1279:
case 3500:
case 3166:
case 2233:
case 2289:
case 3200:
case 450:
case 1579:
case 1543:
case 121:
case 3298:
case 1563:
case 2292:
case 2796:
case 1920:
case 3106:
case 1636:
case 2511:
case 3426:
case 2585:
case 3987:
case 915:
case 661:
case 252:
case 426:
case 2464:
case 527:
case 1114:
case 2951:
case 72:
case 424:
case 1203:
case 731:
case 1503:
case 3894:
case 964:
case 1575:
case 3982:
case 2646:
case 2988:
case 1127:
case 3053:
case 2003:
case 4001:
case 3180:
case 2165:
case 2109:
case 3030:
case 1415:
case 3782:
case 19:
case 3323:
case 3395:
case 2075:
case 2996:
case 1720:
case 2655:
case 999:
case 2853:
case 3787:
case 3361:
case 1135:
case 2830:
case 1085:
case 3605:
case 2310:
case 3669:
case 508:
case 2751:
case 817:
case 1:
case 513:
case 3875:
case 418:
case 1458:
case 2191:
case 3673:
case 1402:
case 698:
case 3701:
case 3576:
case 2378:
case 336:
case 485:
case 1021:
case 247:
case 3372:
case 2092:
case 370:
case 2089:
case 219:
case 334:
case 2139:
case 64:
case 1351:
case 2050:
case 275:
case 3627:
case 1112:
case 1659:
case 1437:
case 1149:
case 2898:
case 3622:
case 1079:
case 1105:
case 3889:
case 3313:
case 3833:
case 3377:
case 3850:
case 2467:
case 148:
case 637:
case 780:
case 1289:
case 3931:
case 2543:
case 820:
case 1876:
case 2579:
case 767:
case 56:
case 221:
case 1292:
case 3784:
case 1597:
case 3086:
case 23:
case 1297:
case 689:
case 2263:
case 2521:
case 1910:
case 1592:
case 705:
case 4084:
case 1396:
case 390:
case 2279:
case 1550:
case 1404:
case 732:
case 1533:
case 1589:
case 2886:
case 21:
case 596:
case 3816:
case 606:
case 3532:
case 358:
case 898:
case 497:
case 3525:
case 1965:
case 604:
case 901:
case 3225:
case 2714:
case 3928:
case 3970:
case 1324:
case 1991:
case 1196:
case 3232:
case 2684:
case 1054:
case 2498:
case 1312:
case 3062:
case 653:
case 1151:
case 1791:
case 2339:
case 3492:
case 582:
case 314:
case 2722:
case 1516:
case 3042:
case 2554:
case 2400:
case 3489:
case 1623:
case 188:
case 316:
case 2178:
case 2048:
case 2867:
case 3450:
case 3204:
case 861:
case 2862:
case 576:
case 3177:
case 1661:
case 3047:
case 287:
case 1188:
case 1369:
case 2254:
case 530:
case 3497:
case 4028:
case 878:
case 3848:
case 623:
case 1709:
case 1349:
case 1317:
case 4070:
case 2453:
case 2871:
case 2705:
case 2769:
case 3534:
case 166:
case 3755:
case 3123:
case 2430:
case 3029:
case 2749:
case 2309:
case 164:
case 2773:
case 1226:
case 97:
case 3651:
case 1802:
case 620:
case 1807:
case 3718:
case 1783:
case 2924:
case 3141:
case 2699:
case 438:
case 2712:
case 837:
case 2829:
case 1460:
case 1613:
case 1008:
case 1335:
case 1677:
case 759:
case 3234:
case 4055:
case 711:
case 3918:
case 2026:
case 3215:
case 1983:
case 902:
case 2590:
case 2912:
case 3064:
case 1834:
case 9:
case 2508:
case 3306:
case 3174:
case 3746:
case 2557:
case 2864:
case 3258:
case 3202:
case 2949:
case 2917:
case 4066:
case 3581:
case 84:
case 2401:
case 4029:
case 2121:
case 144:
case 1708:
case 3849:
case 3337:
case 1348:
case 3451:
case 810:
case 2653:
case 3603:
case 1083:
case 1790:
case 1189:
case 109:
case 1368:
case 1133:
case 1413:
case 338:
case 4071:
case 2073:
case 2143:
case 3393:
case 1640:
case 3812:
case 3055:
case 3729:
case 243:
case 1660:
case 1197:
case 3536:
case 1517:
case 984:
case 1549:
case 1212:
case 4064:
case 2283:
case 3694:
case 4044:
case 1505:
case 986:
case 3929:
case 3824:
case 3744:
case 3046:
case 3304:
case 3176:
case 2354:
case 86:
case 1269:
case 2583:
case 3764:
case 3066:
case 1316:
case 520:
case 1836:
case 1512:
case 2024:
case 1273:
case 1990:
case 3496:
case 1217:
case 739:
case 2948:
case 1754:
case 2245:
case 968:
case 2686:
case 1194:
case 669:
case 3280:
case 1326:
case 397:
case 971:
case 458:
case 1522:
case 2014:
case 2716:
case 787:
case 630:
case 1527:
case 58:
case 674:
case 2565:
case 2509:
case 523:
case 827:
case 1806:
case 3947:
case 1235:
case 676:
case 1676:
case 3814:
case 2545:
case 3633:
case 1065:
case 1009:
case 1423:
case 407:
case 694:
case 2600:
case 3315:
case 813:
case 1495:
case 2027:
case 808:
case 2870:
case 696:
case 3307:
case 1175:
case 3822:
case 4042:
case 2828:
case 2357:
case 2185:
case 1954:
case 2111:
case 2352:
case 1880:
case 4019:
case 2035:
case 3302:
case 1441:
case 3742:
case 1859:
case 955:
case 240:
case 3827:
case 2390:
case 1091:
case 4067:
case 3070:
case 377:
case 2022:
case 465:
case 3028:
case 1461:
case 2642:
case 2157:
case 66:
case 3986:
case 436:
case 3648:
case 1375:
case 1763:
case 2797:
case 881:
case 537:
case 3115:
case 4000:
case 1743:
case 3181:
case 3031:
case 1779:
case 3435:
case 1823:
case 751:
case 2789:
case 168:
case 3700:
case 3340:
case 2667:
case 2190:
case 1693:
case 1632:
case 3422:
case 589:
case 232:
case 3102:
case 2470:
case 2428:
case 2152:
case 3574:
case 2619:
case 2311:
case 2108:
case 2831:
case 562:
case 3541:
case 2884:
case 1406:
case 155:
case 1394:
case 2992:
case 3414:
case 3295:
case 719:
case 3134:
case 3595:
case 1604:
case 2997:
case 1963:
case 1874:
case 610:
case 1943:
case 1979:
case 2975:
case 2278:
case 3272:
case 2220:
case 10:
case 1436:
case 2903:
case 324:
case 493:
case 944:
case 608:
case 598:
case 2520:
case 3277:
case 3572:
case 2154:
case 3213:
case 1911:
case 896:
case 2096:
case 2794:
case 3424:
case 356:
case 1634:
case 192:
case 2578:
case 1168:
case 1389:
case 4030:
case 1877:
case 473:
case 3001:
case 1615:
case 2051:
case 1350:
case 2882:
case 830:
case 1607:
case 231:
case 3412:
case 1020:
case 876:
case 561:
case 22:
case 2629:
case 2775:
case 2088:
case 2138:
case 2363:
case 2801:
case 1602:
case 3082:
case 3851:
case 3132:
case 1658:
case 2343:
case 2671:
case 3193:
case 882:
case 318:
case 2455:
case 1872:
case 3753:
case 3125:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752001201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,];
var gg_b = "1752001201/";

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
