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
case 4068:
case 1980:
case 203:
case 776:
case 2188:
case 2172:
case 100:
case 3063:
case 3620:
case 879:
case 2042:
case 18:
case 3318:
case 3433:
case 3873:
case 1415:
case 3285:
case 246:
case 3857:
case 68:
case 3051:
case 471:
case 548:
case 3512:
case 2854:
case 3019:
case 2310:
case 1829:
case 2463:
case 3442:
case 3214:
case 2033:
case 3092:
case 3599:
case 3180:
case 2825:
case 1003:
case 1878:
case 1713:
case 671:
case 2408:
case 3756:
case 3735:
case 1438:
case 1460:
case 1675:
case 1882:
case 3356:
case 3844:
case 3897:
case 1068:
case 1030:
case 298:
case 1566:
case 3709:
case 2000:
case 2041:
case 3309:
case 2171:
case 2679:
case 850:
case 1769:
case 510:
case 2894:
case 2983:
case 2126:
case 3008:
case 4003:
case 596:
case 1369:
case 3091:
case 1104:
case 171:
case 1937:
case 2765:
case 2167:
case 1964:
case 131:
case 3511:
case 2907:
case 1842:
case 3429:
case 1958:
case 183:
case 1162:
case 2728:
case 729:
case 119:
case 2932:
case 294:
case 826:
case 1902:
case 2646:
case 3884:
case 20:
case 2522:
case 3102:
case 766:
case 2029:
case 2236:
case 1193:
case 619:
case 2943:
case 3696:
case 1206:
case 399:
case 2803:
case 1457:
case 505:
case 3815:
case 1211:
case 3618:
case 4094:
case 1833:
case 2190:
case 2589:
case 419:
case 1161:
case 1669:
case 1998:
case 1901:
case 2576:
case 161:
case 2470:
case 3953:
case 447:
case 1916:
case 1841:
case 2665:
case 2868:
case 1212:
case 865:
case 661:
case 3482:
case 2974:
case 1375:
case 3838:
case 3860:
case 3656:
case 3635:
case 615:
case 551:
case 4054:
case 3070:
case 1299:
case 3140:
case 3198:
case 2779:
case 925:
case 1444:
case 3134:
case 1870:
case 2511:
case 2400:
case 2052:
case 1430:
case 3765:
case 3167:
case 728:
case 552:
case 3847:
case 3983:
case 2008:
case 2309:
case 3679:
case 162:
case 1739:
case 398:
case 868:
case 3686:
case 2897:
case 2137:
case 1107:
case 1705:
case 1934:
case 4084:
case 2335:
case 2164:
case 2180:
case 418:
case 733:
case 3346:
case 834:
case 1972:
case 3463:
case 2512:
case 3854:
case 1403:
case 2857:
case 2718:
case 973:
case 2285:
case 1084:
case 2433:
case 933:
case 462:
case 3042:
case 1289:
case 1487:
case 2396:
case 838:
case 2961:
case 3386:
case 172:
case 1131:
case 1852:
case 1990:
case 414:
case 2609:
case 407:
case 2070:
case 2478:
case 2116:
case 1605:
case 486:
case 2838:
case 2860:
case 295:
case 1097:
case 3830:
case 2245:
case 2977:
case 1517:
case 3078:
case 59:
case 1494:
case 857:
case 1447:
case 504:
case 1723:
case 3931:
case 781:
case 1323:
case 24:
case 963:
case 1950:
case 186:
case 3255:
case 1132:
case 472:
case 1851:
case 3887:
case 73:
case 3943:
case 1819:
case 2320:
case 823:
case 2102:
case 763:
case 3646:
case 2266:
case 3081:
case 1073:
case 614:
case 1425:
case 3728:
case 93:
case 4044:
case 1454:
case 924:
case 3610:
case 7:
case 97:
case 686:
case 380:
case 72:
case 4048:
case 11:
case 3736:
case 774:
case 197:
case 3617:
case 3355:
case 3929:
case 873:
case 1689:
case 1181:
case 4090:
case 3336:
case 734:
case 3173:
case 2220:
case 2569:
case 3043:
case 422:
case 1458:
case 833:
case 3324:
case 3724:
case 3493:
case 1402:
case 1565:
case 349:
case 3505:
case 2727:
case 2443:
case 3462:
case 3228:
case 61:
case 317:
case 2154:
case 304:
case 3074:
case 2431:
case 968:
case 3395:
case 1401:
case 1440:
case 1510:
case 3286:
case 41:
case 1048:
case 2061:
case 3837:
case 1182:
case 2867:
case 2474:
case 3982:
case 1622:
case 3978:
case 50:
case 1223:
case 768:
case 2077:
case 2826:
case 580:
case 2053:
case 3461:
case 912:
case 2345:
case 1862:
case 2951:
case 964:
case 189:
case 1480:
case 2919:
case 2627:
case 2714:
case 1579:
case 1321:
case 1088:
case 824:
case 87:
case 723:
case 3246:
case 2666:
case 113:
case 2850:
case 1915:
case 1389:
case 2103:
case 3115:
case 393:
case 2963:
case 2296:
case 3317:
case 1376:
case 613:
case 2385:
case 3802:
case 1984:
case 689:
case 1893:
case 4034:
case 923:
case 2218:
case 8:
case 4067:
case 3083:
case 4072:
case 1322:
case 1071:
case 1100:
case 738:
case 2130:
case 2991:
case 413:
case 4088:
case 1960:
case 3404:
case 778:
case 248:
case 2890:
case 1861:
case 3007:
case 3695:
case 1034:
case 938:
case 2483:
case 3801:
case 2256:
case 2235:
case 1067:
case 546:
case 2004:
case 1853:
case 685:
case 1528:
case 1026:
case 1464:
case 3941:
case 1490:
case 3345:
case 775:
case 3147:
case 3745:
case 3077:
case 4002:
case 245:
case 2982:
case 1098:
case 975:
case 3061:
case 750:
case 2453:
case 3970:
case 1807:
case 2864:
case 2286:
case 2477:
case 1799:
case 3871:
case 1947:
case 688:
case 1994:
case 1883:
case 1312:
case 305:
case 2795:
case 2144:
case 739:
case 1002:
case 204:
case 4040:
case 4001:
case 3154:
case 29:
case 3366:
case 1450:
case 3614:
case 2032:
case 2539:
case 2981:
case 2505:
case 249:
case 3513:
case 4016:
case 1535:
case 2724:
case 3872:
case 939:
case 3685:
case 1359:
case 3432:
case 3220:
case 2157:
case 3062:
case 1706:
case 309:
case 2173:
case 2929:
case 1306:
case 2900:
case 490:
case 965:
case 3407:
case 2160:
case 3209:
case 1191:
case 208:
case 2898:
case 1831:
case 3235:
case 2840:
case 3256:
case 3483:
case 1612:
case 825:
case 587:
case 2007:
case 3848:
case 1037:
case 121:
case 3952:
case 348:
case 2404:
case 3130:
case 3168:
case 1467:
case 1269:
case 1434:
case 3785:
case 3218:
case 1472:
case 1611:
case 184:
case 969:
case 2317:
case 1606:
case 829:
case 2942:
case 3963:
case 2115:
case 293:
case 2858:
case 116:
case 769:
case 1163:
case 3919:
case 1843:
case 684:
case 540:
case 1007:
case 2426:
case 2037:
case 1265:
case 3960:
case 3938:
case 75:
case 2874:
case 2269:
case 3141:
case 3649:
case 1083:
case 3322:
case 3071:
case 3464:
case 3877:
case 3853:
case 3528:
case 3239:
case 1160:
case 2191:
case 493:
case 2930:
case 2968:
case 1898:
case 3067:
case 1840:
case 3205:
case 2612:
case 3034:
case 1246:
case 858:
case 3721:
case 518:
case 693:
case 1933:
case 3072:
case 3579:
case 2163:
case 1210:
case 3480:
case 2843:
case 2659:
case 1624:
case 2472:
case 3984:
case 2119:
case 2611:
case 284:
case 562:
case 1317:
case 3133:
case 3376:
case 1942:
case 3789:
case 193:
case 3776:
case 1858:
case 3389:
case 652:
case 1279:
case 2399:
case 3546:
case 841:
case 2807:
case 507:
case 2799:
case 3416:
case 2275:
case 3510:
case 2947:
case 2312:
case 3440:
case 3401:
case 586:
case 2712:
case 1144:
case 449:
case 2490:
case 1461:
case 3944:
case 3997:
case 2016:
case 2518:
case 3349:
case 2170:
case 404:
case 2040:
case 4032:
case 1982:
case 2098:
case 3402:
case 2311:
case 1724:
case 2925:
case 2359:
case 4074:
case 1324:
case 1157:
case 604:
case 1755:
case 1043:
case 3458:
case 2706:
case 69:
case 3689:
case 1336:
case 1617:
case 1355:
case 1929:
case 3676:
case 2306:
case 31:
case 867:
case 1736:
case 3621:
case 104:
case 117:
case 727:
case 2450:
case 445:
case 1228:
case 1539:
case 2058:
case 1880:
case 2535:
case 316:
case 696:
case 860:
case 1296:
case 3606:
case 2376:
case 1385:
case 2893:
case 1785:
case 3151:
case 3659:
case 3832:
case 3987:
case 3843:
case 448:
case 289:
case 2480:
case 531:
case 2142:
case 2072:
case 2321:
case 2579:
case 2088:
case 3903:
case 196:
case 213:
case 1666:
case 1850:
case 2721:
case 1483:
case 3612:
case 3213:
case 1256:
case 58:
case 3152:
case 3831:
case 791:
case 2067:
case 3191:
case 3699:
case 3968:
case 2437:
case 1209:
case 2853:
case 1407:
case 2239:
case 2026:
case 3108:
case 2464:
case 2877:
case 3434:
case 1908:
case 2322:
case 2071:
case 410:
case 2100:
case 2649:
case 1130:
case 1168:
case 2722:
case 3874:
case 496:
case 991:
case 2938:
case 1952:
case 1890:
case 1848:
case 4077:
case 1513:
case 644:
case 515:
case 3556:
case 2973:
case 1614:
case 2957:
case 1154:
case 3509:
case 3306:
case 2181:
case 109:
case 1220:
case 1569:
case 1062:
case 3706:
case 1432:
case 3925:
case 3359:
case 151:
case 1685:
case 3759:
case 144:
case 519:
case 3596:
case 2749:
case 1867:
case 1474:
case 859:
case 3170:
case 1834:
case 4093:
case 1077:
case 3518:
case 1826:
case 801:
case 605:
case 1745:
case 2997:
case 388:
case 1345:
case 1431:
case 3312:
case 1871:
case 3275:
case 2510:
case 3947:
case 3994:
case 3883:
case 2048:
case 3807:
case 409:
case 2097:
case 2174:
case 3800:
case 1953:
case 695:
case 3585:
case 3940:
case 2517:
case 2723:
case 3669:
case 3998:
case 2249:
case 942:
case 2323:
case 1961:
case 499:
case 1140:
case 1101:
case 2948:
case 3177:
case 3775:
case 1116:
case 44:
case 1635:
case 742:
case 2891:
case 3212:
case 1482:
case 1884:
case 1993:
case 1266:
case 3902:
case 2073:
case 2057:
case 2143:
case 760:
case 64:
case 3958:
case 588:
case 347:
case 3842:
case 2863:
case 14:
case 1481:
case 2950:
case 3473:
case 2892:
case 3211:
case 495:
case 1815:
case 286:
case 3457:
case 3025:
case 1158:
case 2851:
case 2132:
case 199:
case 820:
case 207:
case 4070:
case 1320:
case 1102:
case 214:
case 2926:
case 1309:
case 590:
case 2739:
case 3068:
case 3030:
case 3566:
case 1844:
case 856:
case 3882:
case 701:
case 2305:
case 1356:
case 3438:
case 3460:
case 1904:
case 2107:
case 2705:
case 1756:
case 3713:
case 2870:
case 3964:
case 1441:
case 4051:
case 4092:
case 1091:
case 2623:
case 2536:
case 901:
case 406:
case 2971:
case 2403:
case 3545:
case 3415:
case 1285:
case 970:
case 755:
case 1318:
case 38:
case 643:
case 2084:
case 1620:
case 300:
case 1796:
case 2276:
case 2487:
case 3980:
case 1396:
case 2988:
case 730:
case 1180:
case 770:
case 3484:
case 240:
case 3829:
case 1442:
case 2595:
case 1512:
case 521:
case 143:
case 314:
case 307:
case 758:
case 1887:
case 694:
case 522:
case 1255:
case 60:
case 386:
case 1803:
case 2457:
case 3950:
case 3892:
case 2259:
case 958:
case 180:
case 3057:
case 1081:
case 219:
case 3073:
case 777:
case 194:
case 4078:
case 1328:
case 3891:
case 2212:
case 1295:
case 902:
case 3605:
case 2375:
case 2094:
case 2153:
case 2177:
case 2775:
case 2299:
case 3948:
case 85:
case 4029:
case 1521:
case 597:
case 1379:
case 372:
case 2514:
case 3131:
case 3990:
case 1779:
case 2444:
case 1589:
case 1082:
case 702:
case 2161:
case 3494:
case 1470:
case 261:
case 2800:
case 3174:
case 215:
case 1868:
case 1710:
case 2087:
case 1310:
case 646:
case 1463:
case 2829:
case 1628:
case 2484:
case 603:
case 1346:
case 3015:
case 1746:
case 1825:
case 585:
case 3221:
case 3988:
case 2003:
case 2980:
case 103:
case 1217:
case 1188:
case 3276:
case 3289:
case 200:
case 4041:
case 4000:
case 1042:
case 2881:
case 3403:
case 967:
case 3555:
case 3971:
case 2769:
case 698:
case 1894:
case 513:
case 3222:
case 3060:
case 3038:
case 853:
case 2104:
case 589:
case 3430:
case 231:
case 1134:
case 1365:
case 2713:
case 3107:
case 2527:
case 3934:
case 446:
case 3967:
case 2675:
case 2882:
case 1686:
case 3339:
case 1452:
case 2068:
case 198:
case 362:
case 4042:
case 3739:
case 1679:
case 1812:
case 2601:
case 2640:
case 3371:
case 3529:
case 3238:
case 464:
case 3260:
case 1383:
case 3022:
case 638:
case 2969:
case 678:
case 2764:
case 1899:
case 2337:
case 1707:
case 2737:
case 985:
case 3767:
case 1674:
case 2913:
case 3367:
case 1573:
case 657:
case 3939:
case 138:
case 3726:
case 1200:
case 1557:
case 35:
case 423:
case 2268:
case 178:
case 3326:
case 4017:
case 2489:
case 2118:
case 2476:
case 1806:
case 3021:
case 2602:
case 1946:
case 2570:
case 1811:
case 2824:
case 623:
case 1233:
case 3388:
case 1859:
case 438:
case 220:
case 3582:
case 2780:
case 478:
case 554:
case 123:
case 3146:
case 789:
case 3110:
case 886:
case 3284:
case 3667:
case 2975:
case 2247:
case 2294:
case 2449:
case 922:
case 2012:
case 862:
case 3790:
case 3348:
case 3533:
case 1979:
case 537:
case 256:
case 612:
case 1445:
case 4036:
case 1123:
case 3390:
case 168:
case 2099:
case 577:
case 2592:
case 1331:
case 3186:
case 474:
case 2701:
case 42:
case 818:
case 1731:
case 3049:
case 722:
case 3179:
case 668:
case 3412:
case 2664:
case 3244:
case 2316:
case 1607:
case 2637:
case 3499:
case 2716:
case 2508:
case 62:
case 1743:
case 468:
case 2591:
case 2680:
case 634:
case 1036:
case 1538:
case 1560:
case 1229:
case 3814:
case 2059:
case 1024:
case 3350:
case 4095:
case 2225:
case 3406:
case 2758:
case 840:
case 2817:
case 2358:
case 174:
case 797:
case 3459:
case 134:
case 1928:
case 1281:
case 3885:
case 2302:
case 1732:
case 3257:
case 2866:
case 1085:
case 2110:
case 916:
case 411:
case 3421:
case 1918:
case 2827:
case 2578:
case 169:
case 3380:
case 1996:
case 1014:
case 3824:
case 790:
case 1693:
case 2788:
case 1292:
case 3203:
case 716:
case 2372:
case 3287:
case 3118:
case 1417:
case 883:
case 784:
case 3836:
case 530:
case 2648:
case 2726:
case 570:
case 1956:
case 2734:
case 1304:
case 165:
case 2165:
case 1849:
case 3422:
case 1935:
case 721:
case 1704:
case 111:
case 1677:
case 1653:
case 3364:
case 665:
case 1252:
case 3737:
case 3156:
case 1113:
case 3764:
case 611:
case 3337:
case 3698:
case 1208:
case 4014:
case 3109:
case 3601:
case 2371:
case 3895:
case 639:
case 2500:
case 3120:
case 2885:
case 1793:
case 1066:
case 1568:
case 1889:
case 3358:
case 1455:
case 542:
case 1027:
case 1821:
case 435:
case 2814:
case 3552:
case 1362:
case 3591:
case 227:
case 179:
case 1762:
case 3006:
case 3716:
case 1777:
case 871:
case 1045:
case 1377:
case 3664:
case 2244:
case 1353:
case 3798:
case 2671:
case 1495:
case 2412:
case 988:
case 3563:
case 253:
case 4066:
case 3099:
case 1270:
case 1361:
case 356:
case 1503:
case 439:
case 2626:
case 2348:
case 788:
case 3012:
case 2634:
case 3449:
case 3551:
case 1604:
case 1580:
case 1199:
case 1691:
case 2475:
case 3201:
case 466:
case 2023:
case 2660:
case 2835:
case 3298:
case 2744:
case 1479:
case 2797:
case 342:
case 821:
case 625:
case 1839:
case 1945:
case 1277:
case 761:
case 3747:
case 3423:
case 715:
case 2290:
case 4020:
case 3865:
case 3668:
case 3630:
case 1770:
case 919:
case 1111:
case 1651:
case 166:
case 629:
case 2357:
case 2615:
case 1692:
case 983:
case 2757:
case 1262:
case 237:
case 3354:
case 1020:
case 1663:
case 360:
case 129:
case 3906:
case 719:
case 277:
case 3754:
case 816:
case 3166:
case 1537:
case 3959:
case 783:
case 2684:
case 3127:
case 2250:
case 425:
case 2507:
case 3725:
case 2267:
case 1035:
case 3694:
case 1056:
case 2469:
case 1823:
case 2005:
case 2234:
case 3330:
case 520:
case 1009:
case 254:
case 241:
case 1670:
case 2922:
case 2738:
case 2760:
case 971:
case 3562:
case 2543:
case 3405:
case 3069:
case 3264:
case 2697:
case 1352:
case 888:
case 182:
case 2989:
case 2531:
case 676:
case 1096:
case 3280:
case 1363:
case 1410:
case 636:
case 1501:
case 4009:
case 2976:
case 4035:
case 2384:
case 1516:
case 3577:
case 900:
case 78:
case 2574:
case 1719:
case 3185:
case 3787:
case 1751:
case 3703:
case 2715:
case 2673:
case 1914:
case 3303:
case 2272:
case 2657:
case 2846:
case 3684:
case 2911:
case 1:
case 914:
case 907:
case 1924:
case 1729:
case 2166:
case 2754:
case 377:
case 4086:
case 481:
case 4079:
case 986:
case 1329:
case 1955:
case 1642:
case 1243:
case 663:
case 1526:
case 1028:
case 3155:
case 3818:
case 358:
case 813:
case 3615:
case 2603:
case 3373:
case 2202:
case 553:
case 17:
case 1567:
case 889:
case 2504:
case 3896:
case 2258:
case 786:
case 1420:
case 1086:
case 1588:
case 2999:
case 1149:
case 1600:
case 2865:
case 1572:
case 3290:
case 2912:
case 1995:
case 1869:
case 2423:
case 932:
case 2075:
case 2216:
case 3344:
case 3195:
case 3797:
case 1782:
case 43:
case 3835:
case 1382:
case 2240:
case 3023:
case 3856:
case 47:
case 732:
case 681:
case 1813:
case 1733:
case 3315:
case 3272:
case 1681:
case 1333:
case 1176:
case 3117:
case 2703:
case 1548:
case 16:
case 4065:
case 3820:
case 2787:
case 1010:
case 3574:
case 255:
case 3784:
case 740:
case 3384:
case 2577:
case 1121:
case 1629:
case 3976:
case 173:
case 81:
case 2280:
case 1342:
case 230:
case 367:
case 2654:
case 1742:
case 270:
case 2879:
case 2237:
case 2439:
case 1550:
case 2264:
case 3644:
case 3338:
case 3360:
case 1682:
case 628:
case 259:
case 1283:
case 1456:
case 2562:
case 3543:
case 3760:
case 3738:
case 46:
case 4046:
case 2768:
case 2730:
case 3039:
case 3532:
case 1700:
case 822:
case 2368:
case 2330:
case 433:
case 3234:
case 3469:
case 1625:
case 565:
case 787:
case 844:
case 655:
case 1828:
case 3446:
case 3540:
case 706:
case 2629:
case 1280:
case 2342:
case 3410:
case 3598:
case 233:
case 809:
case 3763:
case 170:
case 1114:
case 4069:
case 1561:
case 630:
case 3914:
case 1303:
case 336:
case 2590:
case 2189:
case 2333:
case 943:
case 3792:
case 376:
case 2548:
case 3751:
case 1787:
case 2010:
case 401:
case 3351:
case 155:
case 659:
case 1593:
case 430:
case 2341:
case 2300:
case 1730:
case 3502:
case 2700:
case 2741:
case 3558:
case 3056:
case 1647:
case 1694:
case 3204:
case 1879:
case 382:
case 2409:
case 1237:
case 3752:
case 1439:
case 2207:
case 1264:
case 3352:
case 2875:
case 2456:
case 3391:
case 526:
case 2435:
case 3791:
case 2633:
case 2028:
case 810:
case 23:
case 3293:
case 366:
case 224:
case 2381:
case 2567:
case 3159:
case 1687:
case 1504:
case 3111:
case 442:
case 1846:
case 1127:
case 575:
case 1911:
case 2:
case 535:
case 4075:
case 1325:
case 2924:
case 3537:
case 263:
case 1166:
case 2936:
case 2329:
case 2955:
case 1906:
case 329:
case 2642:
case 2243:
case 1354:
case 160:
case 3663:
case 3486:
case 3839:
case 142:
case 3479:
case 795:
case 3112:
case 2782:
case 1298:
case 3608:
case 2378:
case 1240:
case 2382:
case 3691:
case 2813:
case 3770:
case 2588:
case 1630:
case 1668:
case 2600:
case 460:
case 995:
case 281:
case 579:
case 2572:
case 1347:
case 1394:
case 2995:
case 2274:
case 1423:
case 1145:
case 642:
case 1922:
case 2308:
case 798:
case 3435:
case 1543:
case 3875:
case 1338:
case 1413:
case 3682:
case 3283:
case 1644:
case 1697:
case 2352:
case 3550:
case 282:
case 3409:
case 2823:
case 1469:
case 3700:
case 3741:
case 2009:
case 2502:
case 3122:
case 328:
case 141:
case 3341:
case 2719:
case 3496:
case 2351:
case 1820:
case 746:
case 2751:
case 2319:
case 276:
case 817:
case 3548:
case 36:
case 703:
case 557:
case 1715:
case 1673:
case 236:
case 3681:
case 3189:
case 3733:
case 4039:
case 3742:
case 333:
case 3342:
case 441:
case 167:
case 3629:
case 1976:
case 2985:
case 2018:
case 1384:
case 4005:
case 3869:
case 3274:
case 3572:
case 1290:
case 808:
case 1248:
case 477:
case 3588:
case 2770:
case 2199:
case 2691:
case 1475:
case 3382:
case 1638:
case 1660:
case 1023:
case 1856:
case 52:
case 2608:
case 3378:
case 3231:
case 3782:
case 1797:
case 1809:
case 1344:
case 2253:
case 2839:
case 2945:
case 2277:
case 2486:
case 2262:
case 2663:
case 3955:
case 3329:
case 658:
case 1583:
case 177:
case 3936:
case 794:
case 893:
case 780:
case 3924:
case 2537:
case 3420:
case 2619:
case 2111:
case 2927:
case 3534:
case 1124:
case 3567:
case 2651:
case 266:
case 1373:
case 324:
case 4023:
case 37:
case 2966:
case 1357:
case 677:
case 852:
case 3781:
case 3028:
case 2106:
case 3232:
case 2821:
case 1814:
case 3466:
case 3036:
case 3560:
case 3229:
case 803:
case 79:
case 3343:
case 2920:
case 581:
case 492:
case 2762:
case 1128:
case 3743:
case 3055:
case 3427:
case 949:
case 3732:
case 1500:
case 1257:
case 627:
case 1672:
case 3928:
case 1885:
case 2793:
case 1688:
case 1459:
case 2530:
case 917:
case 99:
case 2889:
case 904:
case 2876:
case 1406:
case 2027:
case 2361:
case 3445:
case 2503:
case 3123:
case 3986:
case 563:
case 1626:
case 1533:
case 2761:
case 1790:
case 1348:
case 3095:
case 2822:
case 275:
case 3774:
case 1499:
case 2777:
case 2377:
case 1244:
case 1297:
case 1179:
case 3282:
case 53:
case 3683:
case 312:
case 250:
case 524:
case 153:
case 3278:
case 1186:
case 3859:
case 793:
case 3946:
case 80:
case 3485:
case 3811:
case 1215:
case 1372:
case 2251:
case 2547:
case 2417:
case 880:
case 1284:
case 1866:
case 3414:
case 3544:
case 3597:
case 1110:
case 993:
case 2918:
case 45:
case 1146:
case 1578:
case 528:
case 1076:
case 3017:
case 2662:
case 3643:
case 2677:
case 3965:
case 3707:
case 3105:
case 2113:
case 1771:
case 3783:
case 3631:
case 1260:
case 708:
case 3812:
case 2291:
case 357:
case 4076:
case 2909:
case 15:
case 3200:
case 3241:
case 3573:
case 1939:
case 4089:
case 1690:
case 1905:
case 1367:
case 1734:
case 908:
case 1334:
case 2935:
case 211:
case 2331:
case 2278:
case 1398:
case 1740:
case 566:
case 2731:
case 350:
case 2282:
case 3353:
case 705:
case 2607:
case 3045:
case 1637:
case 1716:
case 3777:
case 2374:
case 1551:
case 1294:
case 2774:
case 375:
case 1449:
case 1519:
case 4011:
case 905:
case 4006:
case 2445:
case 156:
case 3361:
case 3270:
case 2515:
case 3027:
case 3876:
case 843:
case 3436:
case 274:
case 22:
case 3568:
case 2332:
case 3424:
case 234:
case 2928:
case 2281:
case 3393:
case 2732:
case 1120:
case 3762:
case 2743:
case 2055:
case 3920:
case 3362:
case 944:
case 951:
case 2560:
case 339:
case 2466:
case 909:
case 3821:
case 311:
case 3849:
case 1422:
case 691:
case 3304:
case 1913:
case 365:
case 3956:
case 2200:
case 3661:
case 3169:
case 1268:
case 3909:
case 3291:
case 1895:
case 3554:
case 1109:
case 948:
case 3208:
case 536:
case 1698:
case 2783:
case 3113:
case 2707:
case 3653:
case 1737:
case 2307:
case 3677:
case 2242:
case 3996:
case 369:
case 1780:
case 796:
case 2017:
case 3918:
case 2597:
case 1658:
case 3219:
case 1489:
case 1476:
case 996:
case 582:
case 491:
case 1855:
case 2910:
case 1203:
case 326:
case 1570:
case 1196:
case 1824:
case 2233:
case 2859:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746939602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,];
var gg_b = "1746939602/";

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
